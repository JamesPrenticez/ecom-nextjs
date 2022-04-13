import React, {useEffect, useState} from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Layout from '../../components/Layout'
import Rating from '@mui/material/Rating';
import DropDown from '../../components/DropDown';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/actions"

export default function ProductDetailsPage({product}) {
  const [quantity, setQuantity] = useState(Number(1))
  const [color, setColor] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    if(product.color?.length > 0) setColor(product.color[0])
  }, [])

  const handleChangeStock = (e, stock) => {
    e.preventDefault()
    let value = e.target.value
    if(value <= 1) value = 1
    if(value >= stock) value = stock
    setQuantity(value)
  }

  const handleChangeColor = (item) => {
    //This is not a input its just a Div so we can skip the extra steps
    //e.preventDefault()
    //setColor(e.target.value)
    setColor(item)
  }

  const handleAddToCart = () => {
    if(product.numInStock <= 0) window.alert("Sorry. Product is out of stock")
    dispatch(addToCart(product, color, quantity))
  }

  return (
    <Layout title={product?.name} description={product?.description}>
      <section className="p-6">
        <NextLink href="/" passHref>
          <a className="text-primary-link">Back to products</a>
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

            <h2>{product.name}</h2>

            <div className="flex-wrap md:flex justify-between">
              {/* Left */}
              <ul className="w-full sm:w-1/4 md:w-1/2 p-2">
                <li>
                  <h6>Category:</h6> <p>{product.category}</p>
                </li>
                <li>
                  <h6>Brand:</h6> <p>{product.brand}</p>
                </li>
              </ul>

              {/* Right */}
              <div className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 drop-shadow-md rounded-sm p-3 grid grid-cols-3 gap-2 items-center">
                {/* Price */}
                <h6 className="col-span-2">Price:</h6>
                <p>${product.price}</p>

                {/* Stock */}
                <h6 className="col-span-2">Stock:</h6>
                <p>only {product.numInStock} left!</p>

                {/* Color */}
                {product.color &&
                  <>
                    <h6 className="col-span-2">Color:</h6>
                    <DropDown
                      selectClassName="bg-secondary-background text-secondary-text"
                      optionsClassName="bg-secondary-background text-secondary-text"
                      itemClassName="hover:bg-primary-background hover:text-primary-text" 
                      items={product.color}
                      value={color}
                      onChange={handleChangeColor}
                    />
                  </> 
                }

                {/* Color */}
                <h6 className="col-span-2">Quantity:</h6>
                <div className='flex'>
                  <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)} className="w-12 bg-gray-300 p-2 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed">
                    &ndash;
                  </button>
                  <input type="number" value={quantity} onChange={(e) => handleChangeStock(e, product.numInStock)} className="w-full text-center outline-none p-2"/>
                  <button disabled={quantity >= product.numInStock} onClick={() => setQuantity(quantity + 1)} className="w-12 bg-gray-300 p-2 rounded-tr-md rounded-br-md disabled:cursor-not-allowed">
                    &#43;
                  </button>
                </div>                  

                {/* Add to Cart & Buy Now */}
                <div className='col-span-3 space-y-3 mt-3'>

                <button 
                  className='col-span-2 p-3 w-full bg-gray-300 rounded-md'
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button className='col-span-2 p-3 w-full bg-green-500 rounded-md text-white'>
                  BUY NOW
                </button>
                </div>
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`) //.find(ele => ele.catagory == "main page")
  const products = await response.json()
  
  const paths = products.map(product => ({
    params: {
      slug: product.slug, //params can only contain one key/value pair
    }
  }))
  
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  let { params } = context
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`)
  const product = await response.json()
  
  if(!product){
    return { notFound: true }
  }

  return {
    props: { product },
    revalidate: 120, // after 2mins it will update the old cache
  }
}