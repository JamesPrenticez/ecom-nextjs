import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async function getProducts(req, res) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany({
        where: {
          published: true
        },
        select: {
          id: true,
          name: true,
          slug: true,
          images: true,
          price: true,
        }
      });

      // Parse the images field for each product
      const parsedProducts = products.map(product => {
        return {
          ...product,
          images: JSON.parse(product.images)
        };
      });

      return res.status(200).json(parsedProducts);
    } catch (error) {
      // Handle any errors
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  } else {
    // If the request method is not GET
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}