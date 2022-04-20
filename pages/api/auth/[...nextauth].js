import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(){
        const user = {
          id: '1',
          first_name: 'Elon',
          last_name: 'Musk',
          email: 'elon@tesla.com',
          image: 'https://i.imgur.com/l7eQGiE.jpg'
        }
        return user
      }
    }),
  ],
  session: {
    strategy: "jwt",
    // strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/auth/signin",
  },
})

//https://next-auth.js.org/configuration/providers/credentials
//https://next-auth.js.org/configuration/options
//https://www.youtube.com/watch?v=dXM-ahRNNhc