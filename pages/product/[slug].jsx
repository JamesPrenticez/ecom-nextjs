import React, {useEffect, useState} from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Layout from '../../components/Layout'
import Rating from '@mui/material/Rating';
import { data } from '../../utils/data'

export default function ProductDetailsPage({product}) {
  const [counter, setCounter] = useState(Number(1))
  const [color, setColor] = useState(null)

  useEffect(() => {
    if(product.color?.length > 0) setColor(product.color[0])
  }, [])

  const handleChangeStock = (e, stock) =>{
    e.preventDefault()
    let value = e.target.value
    if(value <= 1) value = 1
    if(value >= stock) value = stock
    setCounter(value)
  }

  const handleChangeColor = (e) =>{
    e.preventDefault()
    setColor(e.target.value)
  }

  return (
    <Layout title={product?.name} description={product?.description}>
      <section className="p-6">
        <NextLink href="/" passHref>
          <a className="text-indigo-700">Back to products</a>
        </NextLink>

        <div className="flex flex-wrap md:flex-nowrap justify-between mt-3 md:space-x-6">
          
          {/* Left */}
          <div className="w-full md:w-1/2">
            <NextImage
              src={product.image}
              alt={product.image}
              width={640}
              height={640}
              layout={"responsive"}
            />
          </div>
          
          {/* Right */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex-wrap md:flex justify-between">
              {/* Left */}
              <ul className="w-full sm:w-1/4 md:w-1/2 p-2">
                <li>
                  <bold>Category:</bold> <p>{product.category}</p>
                </li>
                <li>
                  <bold>Brand:</bold> <p>{product.brand}</p>
                </li>
              </ul>

              {/* Right */}
              <div className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 drop-shadow-md rounded-sm p-3 grid grid-cols-2 gap-2 items-center">
                {/* Price */}
                <bold>Price:</bold>
                <p>${product.price}</p>

                {/* Stock */}
                <bold>Stock:</bold>
                <p>only {product.numInStock} left!</p>

                {/* Color */}
                {product.color &&
                  <>
                  <bold>Color:</bold>
                  <div>
                    <select
                        value={color}
                        onChange={handleChangeColor}
                        className="w-full p-3 rounded-md outline-none cursor-pointer"                        
                      >
                      {product.color.map((color) => {
                        return (
                          <option value={color}>{color}</option>
                        )
                      })}
                    </select>
                  </div>
                  </> 
                }

                {/* Color */}
                <bold>Quantity:</bold>
                <div className='flex'>
                  <button disabled={counter <= 1} onClick={() => setCounter(counter - 1)} className="w-12 bg-gray-300 p-2 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed">
                    &ndash;
                  </button>
                  <input type="number" value={counter} onChange={(e) => handleChangeStock(e, product.numInStock)} className="w-full text-center outline-none p-2"/>
                  <button disabled={counter >= product.numInStock} onClick={() => setCounter(counter + 1)} className="w-12 bg-gray-300 p-2 rounded-tr-md rounded-br-md disabled:cursor-not-allowed">
                    &#43;
                  </button>
                </div>                  

                {/* Add to Cart & Buy Now */}
                <button className='p-3 w-full bg-gray-300 rounded-md'>
                  ADD TO CART
                </button>
                <button className='p-3 w-full bg-green-500 rounded-md text-white'>
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Description */}
            <p>Description: {product.description}</p>

            {/* Star Rating */}
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