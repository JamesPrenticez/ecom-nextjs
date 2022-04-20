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
    const b = await prisma.user_address.findMany()
    const c = await prisma.product.findMany()
    const d = await prisma.product_review.findMany()
    const e = await prisma.user_cart_item.findMany()
    const f = await prisma.user_ordered_item.findMany()
    const g = await prisma.user_notification.findMany()

    console.log(
      "users: " + a.length,
      " | user_address: " + b.length,
      " | projects: " + c.length,
      " | product_review: " + d.length,
      " | user_cart_item: " + e.length,
      " | user_ordered_item: " + f.length,
      " | user_notification: " + g.length,
    )
  }

  clean()

module.exports = {clean}