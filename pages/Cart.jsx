import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Counter from "../components/common/Counter";

function TrashCan({className}){
  return(
  // Option 1
  <svg xmlns="http://www.w3.org/2000/svg" className={className}viewBox="0, 0, 400,400" stroke="none" fill="currentColor" fill-rule="evenodd">
    <path id="path0" d="M161.719 30.024 C 152.480 32.595,145.175 38.699,140.833 47.476 L 137.891 53.424 137.643 66.165 L 137.395 78.906 92.058 78.906 C 41.511 78.906,43.170 78.737,39.405 84.277 C 36.804 88.106,36.734 94.738,39.258 98.445 C 42.991 103.931,44.045 104.270,58.208 104.544 L 70.994 104.791 71.441 108.841 C 71.686 111.068,75.042 161.230,78.898 220.313 C 84.437 305.194,86.210 328.886,87.349 333.221 C 91.643 349.565,103.750 362.513,120.442 368.610 L 126.172 370.703 197.789 370.922 C 277.218 371.164,275.504 371.258,286.179 366.100 C 300.035 359.406,310.669 346.002,314.033 330.992 C 314.437 329.188,317.766 279.728,321.431 221.082 C 325.096 162.436,328.301 112.286,328.555 109.637 L 329.016 104.820 341.797 104.558 C 353.305 104.323,354.796 104.134,356.781 102.663 C 364.835 96.689,364.523 84.689,356.202 80.444 C 353.306 78.967,351.407 78.906,307.911 78.906 L 262.634 78.906 262.372 66.166 L 262.109 53.427 259.167 47.478 C 254.739 38.525,247.443 32.520,237.891 29.968 C 232.486 28.525,166.935 28.573,161.719 30.024 M233.013 56.306 C 236.346 57.824,237.042 59.973,237.363 69.727 L 237.665 78.906 200.000 78.906 L 162.335 78.906 162.637 69.727 C 162.952 60.150,163.658 57.858,166.759 56.352 C 169.030 55.249,230.599 55.205,233.013 56.306 M302.769 105.669 C 303.500 106.569,289.020 325.170,288.043 327.972 C 285.416 335.517,279.037 341.726,271.467 344.110 C 267.992 345.205,259.660 345.322,198.421 345.134 L 129.297 344.922 125.722 343.160 C 120.028 340.355,115.909 336.316,113.268 330.951 L 110.845 326.029 104.694 221.413 C 101.311 163.874,98.331 114.014,98.071 110.613 L 97.598 104.429 200.106 104.954 C 256.485 105.242,302.684 105.564,302.769 105.669 M145.313 146.148 C 142.764 147.220,139.970 149.862,138.598 152.500 C 136.897 155.769,136.967 294.359,138.671 297.655 C 142.107 304.300,151.485 306.534,157.305 302.095 C 162.845 297.870,162.500 303.008,162.500 224.764 L 162.500 154.137 160.742 151.555 C 157.187 146.331,150.473 143.978,145.313 146.148 M195.313 146.148 C 192.764 147.220,189.970 149.862,188.598 152.500 C 186.897 155.769,186.967 294.359,188.671 297.655 C 192.107 304.300,201.485 306.534,207.305 302.095 C 212.845 297.870,212.500 303.008,212.500 224.764 L 212.500 154.137 210.742 151.555 C 207.187 146.331,200.473 143.978,195.313 146.148 M245.313 146.148 C 242.764 147.220,239.970 149.862,238.598 152.500 C 236.897 155.769,236.967 294.359,238.671 297.655 C 242.107 304.300,251.485 306.534,257.305 302.095 C 262.845 297.870,262.500 303.008,262.500 224.764 L 262.500 154.137 260.742 151.555 C 257.187 146.331,250.473 143.978,245.313 146.148"></path>
  </svg>
  // Option 2
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400"  stroke="none" fill="#000000" fill-rule="evenodd">
  //   <path id="path0" d="M163.095 1.517 C 146.449 6.838,137.500 20.415,137.500 40.348 L 137.500 49.945 98.633 50.168 L 59.766 50.391 55.078 52.686 C 49.100 55.614,43.124 61.592,40.189 67.578 L 37.891 72.266 37.678 100.781 C 37.415 136.054,37.932 137.490,50.914 137.497 L 56.126 137.500 56.574 142.383 C 56.820 145.068,59.320 196.484,62.128 256.641 C 64.937 316.797,67.619 367.949,68.088 370.311 C 70.692 383.418,80.210 394.062,93.189 398.381 C 98.116 400.020,98.270 400.022,201.641 399.816 L 305.160 399.609 311.258 396.595 C 322.148 391.213,329.751 381.547,331.931 370.313 C 332.390 367.949,335.063 316.797,337.872 256.641 C 340.680 196.484,343.180 145.068,343.426 142.383 L 343.874 137.500 349.086 137.497 C 362.068 137.490,362.585 136.054,362.322 100.781 L 362.109 72.266 359.811 67.578 C 356.878 61.596,350.904 55.622,344.922 52.689 L 340.234 50.391 301.367 50.168 L 262.500 49.945 262.500 40.276 C 262.500 20.082,253.094 6.231,235.991 1.239 C 229.207 -0.742,169.447 -0.513,163.095 1.517 M226.893 25.748 C 234.182 27.439,236.824 31.619,237.337 42.275 L 237.709 50.000 200.000 50.000 L 162.291 50.000 162.663 42.275 C 163.166 31.824,165.868 27.408,172.752 25.783 C 176.442 24.912,223.157 24.882,226.893 25.748 M333.122 76.088 C 337.007 77.711,337.500 80.110,337.500 97.382 L 337.500 112.500 200.000 112.500 L 62.500 112.500 62.500 97.382 C 62.500 80.328,63.015 77.728,66.707 76.121 C 70.388 74.518,329.290 74.486,333.122 76.088 M317.523 142.383 C 317.310 145.068,314.865 196.133,312.089 255.859 C 306.436 377.494,307.262 368.878,300.865 372.857 L 298.047 374.609 200.000 374.609 L 101.953 374.609 99.135 372.857 C 92.738 368.878,93.564 377.494,87.911 255.859 C 85.135 196.133,82.690 145.068,82.477 142.383 L 82.090 137.500 200.000 137.500 L 317.910 137.500 317.523 142.383 M130.657 164.058 C 124.541 167.787,125.006 160.209,125.006 256.250 C 125.006 352.291,124.541 344.713,130.657 348.442 C 136.322 351.896,145.065 349.881,148.442 344.343 C 150.880 340.344,150.880 172.156,148.442 168.157 C 145.065 162.619,136.322 160.604,130.657 164.058 M193.157 164.058 C 187.041 167.787,187.506 160.209,187.506 256.250 C 187.506 352.291,187.041 344.713,193.157 348.442 C 198.822 351.896,207.565 349.881,210.942 344.343 C 213.380 340.344,213.380 172.156,210.942 168.157 C 207.565 162.619,198.822 160.604,193.157 164.058 M255.657 164.058 C 249.541 167.787,250.006 160.209,250.006 256.250 C 250.006 352.291,249.541 344.713,255.657 348.442 C 261.322 351.896,270.065 349.881,273.442 344.343 C 275.880 340.344,275.880 172.156,273.442 168.157 C 270.065 162.619,261.322 160.604,255.657 164.058"></path>
  // </svg>
  )
}

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart.cartItems);
  const currentCountry = useSelector((state) => state.currentCountry);

  let subtotal = cartItems.reduce((a, b) => a + b.quantity * b.price, 0)
  let tax = subtotal * currentCountry.tax
  let total = subtotal + tax

  return (
    <Layout title="Shopping Cart" description="Review Order">

      {cartItems.length === 0 ? (
        <div className="bg-red-500 py-6 space-y-6">
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
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      {/* ---------- Display Image ----------  */}
                      <TableCell className="bubble">
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <a >
                            <NextImage
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                              layout={"responsive"}
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
                      {/* ---------- Quantity Incrementor ----------  */}
                      <TableCell align="right">
                        <Counter 
                          value={item.quantity} 
                          min={1}
                          max={item.numInStock}
                          handleClick={()=>{}}
                          handleChange={()=>{}}
                        />
                      </TableCell>
                      {/* ---------- Price----------  */}
                      <TableCell align="right">
                        <p>${item.price}</p>
                      </TableCell>
                      {/* ---------- Trash Can / Delete Button ----------  */}
                      <TableCell align="right">
                          <TrashCan className="h-[1.25rem] ml-auto cursor-pointer bubble" />
                      </TableCell>
                    </TableRow>
                  ))}
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
                    <button className='p-3 w-[90%] bg-primary-action rounded-md text-white bubble mx-auto'>
                      CHECKOUT
                    </button>
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