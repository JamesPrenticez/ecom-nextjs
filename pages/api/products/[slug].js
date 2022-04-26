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
        id: true,
        name: true,
        slug: true,
        category: true,
        images: true,
        brand: true,
        description: true,
        colors: true,
        price: true,
        num_in_stock: true,
        product_reviews: {
          select: {
            name: true,
            rating: true,
          },
        }
      }
    }).then(item => {
      let ratingCount = item.product_reviews.length
      let ratingAvg = Math.round((item.product_reviews.map(review => review.rating).reduce((a,b) => a + b, 0) / ratingCount) * 10) / 10
      let result = {
        id: item.id,
        name: item.name,
        slug: item.slug,
        category: item.category,
        images: item.images,
        brand: item.brand,
        description: item.description,
        colors: item.colors,
        price: item.price,
        numInStock: item.num_in_stock,
        numReviews: ratingCount,
        rating: ratingAvg,
      }
      return res.status(200).json(JSON.stringify(result))
    })
  }
}