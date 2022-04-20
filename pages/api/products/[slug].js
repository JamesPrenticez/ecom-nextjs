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
        image: true,
        brand: true,
        description: true,
        colors: true,
        price: true,
        num_in_stock: true,
        reviews: {
          select: {
            name: true,
            rating: true,
          },
        }
      }
    }).then(item => {
      let ratingCount = item.reviews.length
      let ratingAvg = Math.round((item.reviews.map(review => review.rating).reduce((a,b) => a + b, 0) / ratingCount) * 10) / 10
      let result = {
        id: item.id,
        name: item.name,
        slug: item.slug,
        category: item.category,
        image: item.image,
        brand: item.brand,
        description: item.description,
        colors: item.colors,
        price: item.price,
        num_in_stock: item.num_in_stock,
        num_reviews: ratingCount,
        rating: ratingAvg,
      }
      return res.status(200).json(JSON.stringify(result))
    })
  }
}