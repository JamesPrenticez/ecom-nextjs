const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.user.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.review.deleteMany({})
    const a = await prisma.user.findMany()
    const b = await prisma.product.findMany()
    const c = await prisma.review.findMany()

    console.log("users: " + a.length, " | ", "projects: " + b.length, " | ", "comments: " + c.length)
  }

  clean()

module.exports = {clean}