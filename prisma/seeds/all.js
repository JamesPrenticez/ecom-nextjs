const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./1-users')
const {user_addresses} = require('./2-user_addresses')
const {products} = require('./3-products')
const {user_cart_items} = require('./4-user_cart_items')
const {user_ordered_items} = require('./5-user_ordered_items')
const {reviews} = require('./6-reviews')

async function main() {
  // users
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log('---------- user ----------')
  console.log(a)
  
  // user_address
  for( i = 0; i < user_addresses.length; i++){
    const item = user_addresses[i]
    await prisma.user_address.create({
      data: item
    });
  }

  const b = await prisma.user_address.findMany()
  console.log('---------- user_address ----------')
  console.log(b)

  // products
  for( i = 0; i < products.length; i++){
    const item = products[i]
    await prisma.product.create({
      data: item
    });
  }

  const c = await prisma.product.findMany()
  console.log('---------- products ----------')
  console.log(c)

  // user_cart_items
  for( i = 0; i < user_cart_items.length; i++){
    const item = user_cart_items[i]
    await prisma.user_cart_item.create({
      data: item
    });
  }

  const d = await prisma.user_cart_item.findMany()
  console.log('---------- cart_item ----------')
  console.log(d)

  // user_ordered_items
  for( i = 0; i < user_ordered_items.length; i++){
    const item = user_ordered_items[i]
    await prisma.user_ordered_item.create({
      data: item
    });
  }

  const e = await prisma.user_ordered_item.findMany()
  console.log('---------- user_ordered_item ----------')
  console.log(e)

  //Reviews
  for( i = 0; i < reviews.length; i++){
    const item = reviews[i]
    await prisma.review.create({
      data: item
    });
  }

  const f = await prisma.review.findMany()
  console.log('---------- review ----------')
  console.log(f)
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