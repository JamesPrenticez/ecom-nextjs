import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// here
export default async function getProduct(req, res){
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
      const ratingCount = item.product_reviews.length
      const ratingAvg = Math.round((item.product_reviews.map(review => review.rating).reduce((a,b) => a + b, 0) / ratingCount) * 10) / 10
      const colorsParsed =  JSON.parse(item.colors)
      const imagesParsed = JSON.parse(item.images)

      let result = {
        id: item.id,
        name: item.name,
        slug: item.slug,
        category: item.category,
        images: imagesParsed,
        brand: item.brand,
        description: item.description,
        colors: colorsParsed,
        price: item.price,
        numInStock: item.num_in_stock,
        numReviews: ratingCount,
        rating: ratingAvg,
      }
      return res.status(200).json(result)
    })
  }
}