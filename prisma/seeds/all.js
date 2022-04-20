const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./1-users')
const {user_addresses} = require('./2-user_addresses')
const {products} = require('./3-products')
const {product_reviews} = require('./4-product_reviews')
const {user_cart_items} = require('./5-user_cart_items')
const {user_ordered_items} = require('./6-user_ordered_items')
const {user_notifications} = require('./7-user_notifications')

async function main() {
  // ---------- users ----------
  console.log('---------- user ----------')
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log(a)
  
  // ---------- user_address ---------- 
  console.log('---------- user_address ----------')
  for( i = 0; i < user_addresses.length; i++){
    const item = user_addresses[i]
    await prisma.user_address.create({
      data: item
    });
  }

  const b = await prisma.user_address.findMany()
  console.log(b)

  // ---------- products ----------
  console.log('---------- products ----------')
  for( i = 0; i < products.length; i++){
    const item = products[i]
    await prisma.product.create({
      data: item
    });
  }

  const c = await prisma.product.findMany()
  console.log(c)

  // ---------- product_reviews ----------
  console.log('---------- product_review ----------')
  for( i = 0; i < product_reviews.length; i++){
    const item = product_reviews[i]
    await prisma.product_review.create({
      data: item
    });
  }

  const d = await prisma.product_review.findMany()
  console.log(d)
  

  // ---------- user_cart_items ----------
  for( i = 0; i < user_cart_items.length; i++){
    const item = user_cart_items[i]
    await prisma.user_cart_item.create({
      data: item
    });
  }

  const e = await prisma.user_cart_item.findMany()
  console.log('---------- cart_item ----------')
  console.log(e)

  // ---------- user_ordered_items ----------
  console.log('---------- user_ordered_item ----------')
  for( i = 0; i < user_ordered_items.length; i++){
    const item = user_ordered_items[i]
    await prisma.user_ordered_item.create({
      data: item
    });
  }

  const f = await prisma.user_ordered_item.findMany()
  console.log(f)

  // ---------- user_notifications ----------
  console.log('---------- user_notifications ----------')
  for( i = 0; i < user_notifications.length; i++){
    const item = user_notifications[i]
    await prisma.user_notification.create({
      data: item
    });
  }

  const g = await prisma.user_notification.findMany()
  console.log(g)

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany-preview