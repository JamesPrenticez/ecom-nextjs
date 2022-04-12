const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./1-users')
const {products} = require('./2-products')
const {reviews} = require('./3-reviews')

async function main() {
  //Users
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log(a)

  //Products
  for( i = 0; i < products.length; i++){
    const item = products[i]
    await prisma.product.create({
      data: item
    });
  }

  const b = await prisma.product.findMany()
  console.log(b)

  //Reviews
  for( i = 0; i < reviews.length; i++){
    const item = reviews[i]
    await prisma.review.create({
      data: item
    });
  }

  const c = await prisma.review.findMany()
  console.log(c)
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