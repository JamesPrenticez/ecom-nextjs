import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Layout from "../components/Layout";
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
        <section className="p-6">
          <h1>Products</h1>
          <Grid container spacing={1} className="mt-3">
            {products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card className="h-full">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                    <NextImage
                        src={product.image}
                        alt={product.image}
                        width={640}
                        height={640}
                        layout={"responsive"}
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
            ))}
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

  const products = await response.json()

  if(!products){
    return { notFound: true }
  }

  return {
    props: { products },
    revalidate: 120, // after 2mins
  }
}