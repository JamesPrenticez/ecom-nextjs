import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import { imageLoader } from '../components/hooks/useImageLoader'
import RippleEffect from "../components/common/RippleEffect";
import { type IProduct } from "../models/product/IProduct";
import { GetStaticProps } from "next";
import { axiosInstance } from "../redux1/services/axiosInstance";

interface Props {
  products: IProduct[];
}

export default function Home({products}: Props) {
  // console.log("%cOh hello there!", "color:green; background-color:yellow; font-size: 64px")

  return (
    <Layout title={"Home"}>
      <section className="p-3">
        <h1 className="pb-3">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product) => {
            return (
            <Link key={product.name} href={`/product/${product.slug}`}>
              <div className="bg-white border-2 border-white shadow-md rounded-md cursor-pointer ">
                <div className="relative overflow-hidden">
                  <RippleEffect />
                  <Image
                    loader={imageLoader}
                    src={product.images[0]}
                    alt={product.name}
                    width={640}
                    height={640}
                    priority
                    placeholder="blur"
                    blurDataURL="/images/default.jpg"
                  />
                </div>

                <div className="p-3">
                  <p>{product.name}</p>
                  <p className="font-semibold">${product.price}.00</p>
                </div>
                  
                {/* <div>
                  Add to wishlist heart ?
                </div> */}
              </div>
            </Link>
            )}
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // We dont need to hold products in state.. they dont change and they are statically fetched here
  const response = await axiosInstance.get('products', { 
    method: 'GET',
    headers: {
      "Content-Type": "text/json",
    },
  });
  
  const products: IProduct[] = response.data;

  if(!products){
    return { notFound: true }
  }

  return {
    props: {
      products,
      // revalidate: 120, // after 2mins
    },
  };
}
