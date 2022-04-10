import { useRouter } from "next/router";
import React from "react";

import { data } from "../../utils/data";

export default function ProductDetailsPage() {
  const router = useRouter()
  const {slug} = router.query
  const product = data.products.find(ele => ele.slug == slug)
  console.log(product)

  if(!product){
    //router.push('/')
    return (
      <h1>404 - Product not found</h1>
    )
  }

  return (
    <div> 
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
    </div>
  )
}
