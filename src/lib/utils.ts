import { ICurrencyAbbr } from "@/models/ILocale"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  price: number | string,
  options: {
    currency?: ICurrencyAbbr,
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
){
  const { currency = "GBP", notation = "compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}