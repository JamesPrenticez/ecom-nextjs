import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// POST /api/auth/demoAccount
export default async function demoAccount(req, res) {
  const { email } = req.body;
  console.log(email)
  const user = await prisma.user.findUnique({
    where:{
      email: 'elon@tesla.com'
    }
  })
  res.json(user);
}