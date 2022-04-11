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

import { data } from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout title={"Home"}>
        <section className="p-6">
          <h1>Products</h1>
          <Grid container spacing={1} className="mt-3">
            {data.products.map((product) => (
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
