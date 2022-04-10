import React from 'react'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import { Link } from '@mui/material'
import { data } from '../../utils/data'

export default function ProductDetailsPage({product}) {

  return (
    <Layout title={product.name}> 
      <main className="p-6">
        <NextLink href="/" passHref>
          <Link>
            back to products
          </Link>
        </NextLink>
      </main>
    </Layout>
  )
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