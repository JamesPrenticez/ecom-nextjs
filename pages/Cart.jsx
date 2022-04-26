import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { useImageLoader } from "../components/hooks/useImageLoader"
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, deleteCartItem } from "../redux/cart/actions"
import Layout from "../components/Layout";
import { TrashCanIcon } from "../components/icons/common";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Counter from "../components/common/Counter";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentCountry = useSelector((state) => state.currentCountry);
  const dispatch = useDispatch();

  let subtotal = cartItems.reduce((a, b) => a + b.quantity * b.price, 0)
  let tax = subtotal * currentCountry.tax
  let total = subtotal + tax

  const handleClickQuantity = (item, quantity) => {
    let color = item.color
    dispatch(setCartItems(item, color, quantity))
  }

  const handleClickDelete = (item) => {
    dispatch(deleteCartItem(item))
  }

  return (
    <Layout title="Shopping Cart" description="Review Order">

      {cartItems.length === 0 ? (
        <div className="bg-primary-danger py-6 space-y-6">
          <h1>Shopping Cart</h1>
          <NextLink href="/" passHref>
            <a>
              <h2 className="hover:text-primary-link">Cart is empty. Go Shopping!</h2>
            </a>
          </NextLink>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9">
            <h1 className="p-3">Shopping Cart</h1>
            <TableContainer className="overflow-hidden">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Color</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => { 
                    return (
                    <TableRow key={item.id}>
                      {/* ---------- Display Image ----------  */}
                      <TableCell className="bubble">
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <a >
                            <NextImage
                              loader={useImageLoader}
                              src={item.images[0]}
                              alt={item.name}
                              width={50}
                              height={50}
                              layout={"responsive"}
                              priority
                              placeholder="blur"
                              blurDataURL="/images/default.jpg"
                            />
                          </a>
                        </NextLink>
                      </TableCell>
                      {/* ---------- Product Name ----------  */}
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <a>
                           <h3 className="hover:text-primary-link hover:underline">{item.name}</h3>
                          </a>
                        </NextLink>
                      </TableCell>
                      {/* ---------- Color DropDown ----------  */}
                      <TableCell align="right">
                        {item.color}
                        {/* <DropDown></DropDown> */}
                      </TableCell>
                      {/* ---------- Quantity Incrementor ----------  */}
                      <TableCell align="right">
                        <Counter
                          className="float-right"
                          item={item} 
                          quantity={item.quantity}
                          handleClick={handleClickQuantity} //redux
                        />
                      </TableCell>
                      {/* ---------- Price----------  */}
                      <TableCell align="right">
                        <p>${item.price}</p>
                      </TableCell>
                      {/* ---------- Trash Can / Delete Button ----------  */}
                      <TableCell align="right">
                        <button onClick={() => handleClickDelete(item)}>
                          <TrashCanIcon className="h-[1.25rem] ml-auto cursor-pointer bubble"/>
                        </button>
                      </TableCell>
                    </TableRow>

                  )})}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="w-full h-full border-l border-b p-3 border-gray-200 drop-shadow-md rounded-sm  items-center">
              <div className="h-full w-full p-3 bg-white shadow-lg">
                <ul>
                  <li>
                    <h5>({cartItems.reduce((a, b) => a + b.quantity, 0)} item)</h5>
                  </li>
                  <li>
                    <h5>SUBTOTAL: {currentCountry.symbol}{subtotal}</h5>
                  </li>
                  <li>
                    <h5>TAX: {currentCountry.symbol}{tax}</h5>
                  </li>
                  <li>
                    <h4>TOTAL: {currentCountry.symbol}{total} <small>({currentCountry.abbr})</small></h4>
                  </li>
                  <li>

                  <NextLink href={"/checkout/shipping_details"} passHref>
                    <a className="text-center p-3 w-[90%] bg-primary-action rounded-md text-white mx-auto">
                        CHECKOUT
                    </a>
                  </NextLink>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      )}
    </Layout>
  );
}