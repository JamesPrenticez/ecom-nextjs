import React, {useEffect, useState} from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/cart/actions"
import Carousel from '../../components/common/Carousel';
import Layout from '../../components/Layout'
import Counter from '../../components/common/Counter'
import DropDown from '../../components/common/DropDown';

export default function ProductDetailsPage({product}) {
  const [color, setColor] = useState(product.colors[0]?.name)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if(product.color?.length > 0) setColor(product.color[0])
  }, [])


  const handleClickQuantity = (product, quantity) => {
    setQuantity(quantity)
  }

  const handleChangeColor = (color) => {
    setColor(color)
  }

  const handleAddToCart = () => {
    if(product.numInStock <= 0) window.alert("Sorry. Product is out of stock")
    dispatch(setCartItems(product, color, quantity))
    //Do we want to show a modal here 
    //Continue shopping? or checkout now?
    <Toast >
    router.push('/cart')
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
            <Carousel images={product.images} />
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
              <div className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 drop-shadow-md rounded-sm p-3 grid grid-cols-3 gap-2 products-center">
                {/* Price */}
                <h6 className="col-span-2">Price:</h6>
                <p>${product.price}</p>

                {/* Stock */}
                <h6 className="col-span-2">Stock:</h6>
                <p>Only {product.numInStock} left!</p>

                {/* Color */}
                {product.colors.length > 0 &&
                  <>
                    <h6 className="col-span-2">Color:</h6>
                    <DropDown 
                      selectClassName=""
                      optionsClassName="bg-white"
                      itemClassName="hover:bg-primary-link hover:text-secondary-text"
                      value={color}
                      items={product.colors.map(color => color)}
                      onChange={handleChangeColor}
                    />
                  </> 
                }

                {/* Quantity */}
                <h6 className="col-span-2">Quantity:</h6>
                <Counter
                  className="float-right"
                  item={product}
                  quantity={quantity}
                  handleClick={handleClickQuantity} //redux
                />

                {/* Add to Cart & Buy Now */}
                <div className='col-span-3 space-y-3 mt-3'>

                <button 
                  className='col-span-2 p-3 w-full bg-gray-300 rounded-md'
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button className='col-span-2 p-3 w-full bg-primary-action rounded-md text-white'>
                  BUY NOW
                </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <p>{product.description}</p>

            {/* Star Rating */}
            <div className="flex products-center space-x-2">
              {/* <Rating
                precision={0.1}
                name="read-only"
                value={product.rating}
                readOnly
              /> */}
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
  const result = await response.json()

  if(!result){
    return { notFound: true }
  }

  let product = {
    ...result,
    colors: JSON.parse(result.colors),
    images: JSON.parse(result.images)
  }

  return {
    props: { product },
    revalidate: 120, // after 2mins it will update the old cache
  }
}