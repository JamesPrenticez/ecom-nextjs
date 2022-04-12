// ---------- Without a Database ----------
//import { data } from '../../utils/data'
//const products = data.products

// export default function handler(req, res) {
//   res.status(200).json(JSON.stringify(products))
// }

// ---------- With a Database ----------
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function getProducts(req, res){
  let result = {}
  if(req.method === 'GET'){
    const products = await prisma.product.findMany({
      where: {
        published: true
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
    }).then(products => {
      result = products.map(product => {
        let ratingCount = product.reviews.length
        let ratingAvg = product.reviews.map(review => review.rating).reduce((a,b) => a + b, 0) / ratingCount;
        return (
          {
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
        )
      })
    })
  }
  return res.status(200).json(JSON.stringify(result))
}