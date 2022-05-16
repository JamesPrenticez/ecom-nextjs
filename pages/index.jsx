import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Layout from "../components/Layout";
import { useImageLoader } from '../components/hooks/useImageLoader'
import RippleEffect from "../components/common/RippleEffect";
import { toast } from "../components/hooks/useToaster";

export default function Home({products}) {
  console.log("%cOh hello there!", "color:green; background-color:yellow; font-size: 64px")
  return (
    <>
      <Layout title={"Home"}>
        <section className="p-3">
          <h1 className="pb-3">Products</h1>
          {toast.standard("testing")}
          <button onClick={() => {}}>
            TOAST MACHINE
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {products.map((product) => {
              return (
              <NextLink key={product.name} href={`/product/${product.slug}`} passHref>
                <div className="bg-white border-2 border-white shadow-md rounded-md cursor-pointer ">
                  <div className="relative overflow-hidden">
                    <RippleEffect />
                    <NextImage
                      loader={useImageLoader}
                      src={product.images[0]}
                      alt={product.images[0]}
                      width={640}
                      height={640}
                      layout={"responsive"}
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
              </NextLink>
              )}
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/json',
    }
  });

  const result = await response.json()

  if(!result){
    return { notFound: true }
  }

  let products = result.map(item => {return {...item, images: JSON.parse(item.images)}})

  return {
    props: { products },
    revalidate: 120, // after 2mins
  }
}