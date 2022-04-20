const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log(prisma)

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.user.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.user_address.deleteMany({})
    await prisma.user_cart_item.deleteMany({})
    await prisma.user_ordered_item.deleteMany({})
    await prisma.review.deleteMany({})
    const a = await prisma.user.findMany()
    const b = await prisma.product.findMany()
    const c = await prisma.user_address.findMany()
    const d = await prisma.user_cart_item.findMany()
    const e = await prisma.user_ordered_item.findMany()
    const f = await prisma.review.findMany()

    console.log(
      "users: " + a.length,
      " | projects: " + b.length,
      " | user_address: " + c.length,
      " | user_cart_item: " + d.length,
      " | user_ordered_item: " + e.length,
      " | review: " + f.length,
    )
    
  }

  clean()

module.exports = {clean}