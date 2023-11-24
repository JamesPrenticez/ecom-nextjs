"use client"

import React from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCartIcon } from "@/components/icons/commonIcons";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

const Cart = () => {
  const cartItems =  ["","","","",""]
  const itemsCount = cartItems.length

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
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="flex-1">Transaction Free</span>
                <span>{formatCurrency(456)}</span>
              </div>
            </div>
          </div>
          </>
        ) : (
          <>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart;