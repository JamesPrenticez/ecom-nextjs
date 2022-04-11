import React, {useState} from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Layout from '../../components/Layout'
import { Grid } from '@mui/material'
import Rating from '@mui/material/Rating';
import { data } from '../../utils/data'

export default function ProductDetailsPage({product}) {
  const [counter, setCounter] = useState(1)

  return (
    <Layout title={product.name}>
      <section className="p-6">
        <NextLink href="/" passHref>
          <a className="text-indigo-700">Back to products</a>
        </NextLink>

        <div className="flex flex-wrap md:flex-nowrap justify-between mt-3 md:space-x-6">
          
          <div className="w-full md:w-1/2 bg-pink-500">
            <NextImage
              src={product.image}
              alt={product.image}
              width={640}
              height={640}
              layout={"responsive"}
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6 bg-red-500">
            <div className="flex-wrap md:flex justify-between bg-blue-500">
              <ul className="w-full md:w-1/2 p-3 bg-green-500">
                <li>
                  <bold>Category:</bold> <p>{product.category}</p>
                </li>
                <li>
                  <bold>Brand:</bold> <p>{product.brand}</p>
                </li>
              </ul>

              {/* Right */}
              <ul className="w-full md:w-1/2 border border-gray-200 drop-shadow-md rounded-sm p-3 space-y-3">
                <li>
                  <bold>Price:</bold>
                  <p>${product.price}</p>
                </li>
                <li>
                  <bold>Stock:</bold>
                  <p>only {product.numInStock} left!</p>
                </li>
                <li>
                  <bold>Color:</bold>
                  <p></p>
                </li>
                <li>
                  <bold>Quantity:</bold>
                  <div className='flex'>
                    <button disabled={counter <= 0} onClick={() => setCounter(counter - 1)}>-</button>
                    <input type="text" value={counter} />
                    <button disabled={counter >= product.numInStock} onClick={() => setCounter(counter + 1)}>+</button>
                  </div>                  
                </li>
                <li className='flex space-x-3 '>
                  <button className='p-3 w-full bg-gray-200 rounded-md'>
                    ADD TO CART
                  </button>
                  <button className='p-3 w-full bg-green-500 rounded-md text-white'>
                    BUY NOW
                  </button>
                </li>
              </ul>
            </div>
            <p>Description: {product.description}</p>
            <div className="flex items-center space-x-2">
              <Rating
                precision={0.1}
                name="read-only"
                value={product.rating}
                readOnly
              />
              <p>{product.rating}/5</p>
              <small>({product.numReviews} reviews)</small>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = data.products.map(product => ({
    params: {
      slug: product.slug
    }
  }))
  //console.log(paths)
  
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params}) => {
  const product = data.products.find(ele => ele.slug == params?.slug)
  
  if(!product){
    return { notFound: true }
  }

  return {
    props: { product },
    revalidate: 3600, // after 1hour seconds it will update the old cache
  }
}