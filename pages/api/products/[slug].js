const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function getProducts(req, res){
  let reqQuerySlug = req.query.slug
  if(req.method === 'GET'){
    await prisma.product.findUnique({
      where: {
        slug: reqQuerySlug
      },
      select: {
        name: true,
        slug: true,
        category: true,
        image: true,
        brand: true,
        description: true,
        price: true,
        numInStock: true,
        reviews: {
          select: {
            name: true,
            rating: true,
          },
        }
      }
    }).then(product => {
      let ratingCount = product.reviews.length
      let ratingAvg = Math.round((product.reviews.map(review => review.rating).reduce((a,b) => a + b, 0) / ratingCount) * 10) / 10
      let result = {
        name: product.name,
        slug: product.slug,
        category: product.category,
        image: product.image,
        brand: product.brand,
        description: product.description,
        price: product.price,
        numInStock: product.numInStock,
        numReviews: ratingCount,
        rating: ratingAvg,
      }
      return res.status(200).json(JSON.stringify(result))
    })
  }
}