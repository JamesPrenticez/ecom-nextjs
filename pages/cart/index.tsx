import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "../../components/hooks/useImageLoader"
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, deleteCartItem } from "../../redux/cart/actions"

import Layout from "../../components/Layout";
import { SecureIcon, TrashCanIcon } from "../../components/icons/common";
import Counter from "../../components/common/Counter";
import CurrentCountry from "../../components/CountrySelector"

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentCountry = useSelector((state) => state.currentCountry);
  const dispatch = useDispatch();

  let numOfItems = cartItems.reduce((a, b) => a + b.quantity, 0)
  let subtotal = cartItems.reduce((a, b) => a + b.quantity * b.price, 0) 
  let total = subtotal + currentCountry.shippingCost

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
          <Link href="/">
            <h2 className="hover:text-primary-link">Cart is empty. Go Shopping!</h2>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12 space-y-6 lg:space-y-0">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="p-3">Shopping Cart</h1>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="border-b">
                  <tr >
                    <td>Image</td>
                    <td>Name</td>
                    <td align="center">Color</td>
                          
                    <td align="center">Quantity</td>
                    <td align="center">Price</td>
                    <td align="center">Sub Total</td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => { 
                    return (
                    <tr key={item.id} className="border-b">
                      {/* ---------- Display Image ----------  */}
                      <td className="bubble">
                        <Link href={`/product/${item.slug}`}>
                          <Image
                            loader={imageLoader}
                            src={item.images[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                            layout={"responsive"}
                            priority
                            placeholder="blur"
                            blurDataURL="/images/default.jpg"
                          />
                        </Link>
                      </td>
                      {/* ---------- Product Name / Remove ----------  */}
                      <td>
                        <Link href={`/product/${item.slug}`}>
                          <h3 className="hover:text-primary-link">{item.name}</h3>
                        </Link>
                        <button
                          className="flex items-center cursor-pointer pt-2 hover:text-primary-danger"
                          onClick={() => handleClickDelete(item)}>
                          <TrashCanIcon className="h-[1.25rem] pr-1 "/>
                          Remove
                        </button>
                      </td>
                      {/* ---------- Color DropDown ----------  */}
                      <td align="center">
                        {item.color}
                        {/* <DropDown></DropDown> */}
                      </td>
                      {/* ---------- Quantity Incrementor ----------  */}
                      <td align="center">
                        <Counter
                          className="justify-center"
                          item={item} 
                          quantity={item.quantity}
                          handleClick={handleClickQuantity} //redux
                        />
                      </td>
                      {/* ---------- Price----------  */}
                      <td align="center">
                        <p>${item.price}</p>
                      </td>
                      {/* ---------- Sub Total ----------  */}
                      <td align="center">
                        <p>${item.price * item.quantity}</p>
                      </td>
                    </tr>

                  )})}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="w-full h-full border-l border-b border-gray-200 rounded-sm items-center">
              <div className="h-full w-full p-3 bg-white lg:shadow-md">
                <div> 
                  <div>
                    <h2>Order Summary </h2>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-300 py-3">
                    <h5>SUBTOTAL <small className="ml-auto">({numOfItems} {numOfItems === 1 ? "item" : "items"})</small>:</h5>
                    <h5>{currentCountry.symbol}{subtotal}</h5>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-300 py-3">
                    <h5 className="flex items-center">SHIPS TO: &nbsp; <CurrentCountry className="text-sm"/></h5>
                    <h5 className="ml-auto">
                      <small className="font-light mr-1">from</small>
                      {currentCountry.symbol}
                      {currentCountry.shippingCost}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-300 py-3">
                    <h5>TOTAL:</h5>
                    <h5>{currentCountry.symbol}{total} <small>({currentCountry.abbr})</small></h5>
                  </div>
                  <div className="flex items-center justify-between py-3 ">
                    <div className="flex items-center justify-center space-x-2 p-3 w-full text-center bg-primary-action rounded-md text-white hover:bg-primary-action-hover cursor-pointer font-semibold">
                      <Link href={"/checkout/order_details"}>
                        CHECKOUT
                      </Link>
                      <SecureIcon className="h-[1.25rem]" />
                    </div>
                </div>
              </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </Layout>
  );
}

export default Cart;