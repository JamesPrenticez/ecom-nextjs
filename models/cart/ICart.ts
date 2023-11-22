import type { IProduct } from "../product";

export interface ICart {
  userId: string;
  cartItems: IProduct[];
}