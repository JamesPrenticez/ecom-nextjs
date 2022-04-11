import React from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Layout from '../../components/Layout'
import { Grid, Link } from '@mui/material'
import { data } from '../../utils/data'

export default function ProductDetailsPage({product}) {

  return (
    <Layout title={product.name}> 
      <section className="p-6">
        <NextLink href="/" passHref>
          <Link>
            Back to products
          </Link>
        </NextLink>

        <Grid container spacing={1} className="mt-3">
          <Grid item md={6} xs={12}>
          <NextImage
              src={product.image}
              alt={product.image}
              width={640}
              height={640}
              layout={"responsive"}
              />
          </Grid>
        </Grid>
      </section>
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