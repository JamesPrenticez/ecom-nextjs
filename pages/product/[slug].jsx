import React, {useEffect, useState} from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/cart/actions"
import Carousel from '../../components/common/Carousel';
import Rating from '@mui/material/Rating';
import Layout from '../../components/Layout'
import Counter from '../../components/common/Counter'
import DropDown from '../../components/common/DropDown';

export default function ProductDetailsPage({item}) {
  const colors = JSON.parse(item.colors)
  const [color, setColor] = useState(colors[0].name)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if(item.color?.length > 0) setColor(item.color[0])
  }, [])


  const handleClickQuantity = (item, quantity) => {
    setQuantity(quantity)
  }

  const handleChangeColor = (color) => {
    setColor(color)
  }

  const handleAddToCart = () => {
    if(item.numInStock <= 0) window.alert("Sorry. Product is out of stock")
    dispatch(setCartItems(item, color, quantity))
    //We want to show a modal here 
    //Continue shopping? or checkout now?
    router.push('/cart')
  }

  const images = "[\"/images/shirts/shirt1/1.avif\", \"/images/shirts/shirt1/2.avif\", \"/images/shirts/shirt1/3.avif\", \"/images/shirts/shirt1/4.avif\", \"/images/shirts/shirt1/5.avif\", \"/images/shirts/shirt1/6.avif\"]"
  //console.log(JSON.parse(images))
  return (
    <Layout title={item?.name} description={item?.description}>
      <section className="p-6">
        <NextLink href="/" passHref>
          <a className="text-primary-link">Back to products</a>
        </NextLink>

        <div className="flex flex-wrap md:flex-nowrap justify-between mt-3 md:space-x-6">

          {/* Left */}
          <div className="w-full md:w-1/2">
            {/* <NextImage
              src={item.image}
              alt={item.image}
              width={640}
              height={640}
              layout={"responsive"}
            /> */}
            <Carousel images={JSON.parse(images)} />
          </div>
          
          {/* Right */}
          <div className="w-full md:w-1/2 space-y-6">

            <h2>{item.name}</h2>

            <div className="flex-wrap md:flex justify-between">
              {/* Left */}
              <ul className="w-full sm:w-1/4 md:w-1/2 p-2">
                <li>
                  <h6>Category:</h6> <p>{item.category}</p>
                </li>
                <li>
                  <h6>Brand:</h6> <p>{item.brand}</p>
                </li>
              </ul>

              {/* Right */}
              <div className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 drop-shadow-md rounded-sm p-3 grid grid-cols-3 gap-2 items-center">
                {/* Price */}
                <h6 className="col-span-2">Price:</h6>
                <p>${item.price}</p>

                {/* Stock */}
                <h6 className="col-span-2">Stock:</h6>
                <p>Only {item.numInStock} left!</p>

                {/* Color */}
                {item.colors &&
                  <>
                    <h6 className="col-span-2">Color:</h6>
                    <DropDown 
                      selectClassName=""
                      optionsClassName="bg-white"
                      itemClassName="hover:bg-primary-link hover:text-secondary-text"
                      value={color}
                      items={colors.map(color => color)}
                      onChange={handleChangeColor}
                    />
                  </> 
                }

                {/* Quantity */}
                <h6 className="col-span-2">Quantity:</h6>
                <Counter
                  className="float-right"
                  item={item}
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
            <p>{item.description}</p>

            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              <Rating
                precision={0.1}
                name="read-only"
                value={item.rating}
                readOnly
              />
              <p>{item.rating}/5</p>
              <small>({item.numReviews} reviews)</small>
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
  
  const paths = products.map(item => ({
    params: {
      slug: item.slug, //params can only contain one key/value pair
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
  const item = await response.json()
  
  if(!item){
    return { notFound: true }
  }

  return {
    props: { item },
    revalidate: 120, // after 2mins it will update the old cache
  }
}