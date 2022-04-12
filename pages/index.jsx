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
import CurrencySelector from "../components/CurrencySelector";

export default function Home({products, countries}) {
  return (
    <>
      <Layout title={"Home"}>
        <section className="p-6">
          <h1>Products</h1>
          <CurrencySelector countries={countries}/>

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
  const a = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`) //.find(ele => ele.catagory == "main page")
  const products = await a.json()
  const b = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/countries`)
  const countries = await b.json()

  if(!products){
    return { notFound: true }
  }

  return {
    props: { products, countries },
    revalidate: 120, // after 2mins
  }
}