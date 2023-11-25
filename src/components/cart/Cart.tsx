"use client"

import React from "react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCartIcon } from "@/components/icons/commonIcons";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const Cart = () => {
  const cartItems =  [] //["","","","",""]
  const itemsCount = cartItems.length

  const transactionFee = 1
  const total = 1000

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="text-foreground/70 group-hover:text-foreground"
          width={28}
          height={28}
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-foreground/70 group-hover:text-foreground">
          {itemsCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2 pr-6">
          <SheetTitle>Cart {itemsCount}</SheetTitle>
        </SheetHeader>

        {itemsCount > 0 ? (
          <>
          <div className="flex w-full flex-col pr-6">
            cart items
          </div>
          <div className="space-y-4 pr-6">
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="flex-1">Shipping Costs</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{formatCurrency(transactionFee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <SheetFooter>
              <SheetTrigger asChild>
                <Button asChild variant={"default"} className="w-full">
                  <Link 
                    href="/cart"
                  >
                    Continue to Checkout
                  </Link>
                </Button>
              </SheetTrigger>  
            </SheetFooter>
          </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-3 pr-6 -mt-12">
            <ShoppingCartIcon width={80} height={80}/>
            <h1 className="text-center font-semibold text-3xl">
              Your Cart Is Empty
            </h1>
            <Button asChild variant="link" size="sm" className="text-sm text-muted-foreground">
              <Link 
                href="/products"
              >
                Add items to your cart to checkout
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart;