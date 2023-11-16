import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/cart/actions"
import Carousel from '../../components/common/Carousel';
import Layout from '../../components/Layout'
import Counter from '../../components/common/Counter'
import DropDown from '../../components/common/DropDown';
import toast from "react-hot-toast";
import { IProduct } from '../../models/products/IProduct';

interface Props {
  product: IProduct;
}

export default function ProductDetailsPage({product}) {
  const [color, setColor] = useState(product.colors[0]?.name)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if(product.color?.length > 0) setColor(product.color[0])
  }, [product.color])


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
    toast.success(`${product.name} has been added to cart!`)
    router.push('/cart')
  }

  return (
    <Layout title={product?.name} description={product?.description}>
      <section className="p-6">
        <Link href="/" className="text-primary-link">
          Back to products
        </Link>

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
                {product.numInStock > 0 ? (
                    <p>Only {product.numInStock} left!</p>
                  ) : (
                    <p>Out of stock!</p>
                  )
                }                

                {/* Color */}
                {product.colors &&
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
  const product = await response.json()

  if(!product){
    return { notFound: true }
  }

  return {
    props: { product },
    revalidate: 120, // after 2mins it will update the old cache
  }
}