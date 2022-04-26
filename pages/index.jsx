import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Layout from "../components/Layout";
import { useImageLoader } from '../components/hooks/useImageLoader'

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Home({products}) {
  return (
    <>
      <Layout title={"Home"}>
        <section className="p-3">
          <h1 className="pb-3">Products</h1>
          <Grid container spacing={1}>
            {products.map((product) => {
              return (
                <Grid item md={4} key={product.name}>
                  <Card className="h-full">
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
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
                        <CardContent>
                          <Typography>{product.name}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </NextLink>
                      <CardActions>
                        <Typography>${product.price}</Typography>
                        <Button size="small" color="primary">
                          Add to cart
                        </Button>
                      </CardActions>
                  </Card>
                </Grid>
              )}
            )}
          </Grid>
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