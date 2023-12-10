// IMPORTANT cant use @ import in here
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { AuthCredentialsValidationSchema } from "../lib/validators/account-credentials-validation";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidationSchema)
    .mutation(async ({ input }) => {
      const { email, password } = input
      const payload = await getPayloadClient()

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })

      if (users.length !== 0)
        throw new TRPCError({ code: 'CONFLICT' })

      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: 'user',
        },
      })

      return { success: true, sentToEmail: email }
    }),

    //https://youtu.be/06g6YJ6JCJU?t=15897
    verifyEmail: publicProcedure
      .input(z.object({ token: z.string() }))
      .query(async ({ input }) => {
        const { token } = input 

        const payload = await getPayloadClient();

        const isVerified = await payload.verifyEmail({
          collection: "users",
          token
        })

        if(!isVerified){
          throw new TRPCError({ code: "UNAUTHORIZED" } )
        }

        return { success: true } 

      })

})