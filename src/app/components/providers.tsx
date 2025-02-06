'use client';
import { FC, ReactNode } from "react"
import { WishlistProvider } from "../context/WishListProvider";
import CartProvider from "../context/CartProvider";


interface Props {
    children: ReactNode;
}

const Providers: FC<Props> = ({children}) => {
  return (
    <WishlistProvider>
      <CartProvider>
          {children}
      </CartProvider>
    </WishlistProvider>
  )
}

export default Providers
