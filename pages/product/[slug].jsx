import React from "react";

import { data } from "../../utils/data";

export default function ProductDetailsPage({product}) {

  return (
    <div> 
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = data.products.map(product => ({
    params: {
      slug: product.slug
    }
  }))
  console.log(paths)
  
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