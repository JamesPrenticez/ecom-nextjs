import { useRouter } from "next/router";
import React from "react";

export default function ProductDetailsScreen() {
  const router = useRouter()
  const {slug} = router.query
  const product = data.products.find(ele => ele.slug == slug)

  if(!product){
    <div>You need to redirect to 404</div>
  }

  return (
    <div> 
      <h1>{product.name}</h1>
    </div>
  )
}
