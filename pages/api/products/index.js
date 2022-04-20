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
  if(req.method === 'GET'){
    const products = await prisma.product.findMany({
      where: {
        published: true
      },
      select: {
        id: true,
        name: true,
        slug: true,
        image: true,
        price: true,
      }
    }).then(products => {
      return res.status(200).json(JSON.stringify(products))
    })
  }
}