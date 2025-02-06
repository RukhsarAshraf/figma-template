import { Product } from "@/sanity/types/productType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type cartItem = {
    product: Product;
    count: number;
}

interface CartContext {
    items: cartItem[];
    addToCart(product: Product, qty: number): void;
    removeFromCart(product: Product): void;
    countAllItems(): number;
    countTotalPrice(): string;
    clearCart(): void;
    subTotal(): string;
    withTax(): string;
    shipping: number;
}

const updateCartInLs = (products: cartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(products));
}


const CartContext = createContext<CartContext >({
    items: [],
    addToCart() {}, 
    removeFromCart() {},
    clearCart() {},
    countAllItems() {
      return 0;
    },
    countTotalPrice() {
      return "0";
    },
    subTotal(){
        return "0";
    },
    withTax(){
        return "0";
    },
    shipping: 0,
  });

const CartProvider = ({children}: {children: ReactNode}) =>{
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

    const addToCart = (product: Product, qty: number) => {
        const finalCartItems = [...cartItems];
        const index = cartItems.findIndex((item) => product._id === item.product._id);

            if (index === -1){
                finalCartItems.push({count: qty, product});
            }
            else{
               finalCartItems[index].count += qty;
            }
            if(finalCartItems[index]?.count === 0){
                removeFromCart(product);
            }else{
                setCartItems(finalCartItems);
                updateCartInLs(finalCartItems); 
            }
            
    };

    const removeFromCart = (product: Product) => {
        const newProduct = cartItems.filter((item) => item.product._id !== product._id);
        setCartItems(newProduct);
        updateCartInLs(newProduct);
    };

    const countAllItems = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.count, 0);
    };
   
  const shipping = 10.00; 


  const subTotal = ()=>{
    return  cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.count, 0).toFixed(2);
  }
 

  const withTax = ()=>{
    return (parseFloat(subTotal()) * 0.05).toFixed(2);
  }
// const totalPrice = subtotal + shipping + tax;
    const countTotalPrice = () =>{
        return cartItems.reduce((total, cartItem) => total + cartItem.product.price + parseFloat(subTotal()) + shipping + parseFloat(withTax()), 0).toFixed(2);
    }

    const clearCart = () =>{
        setCartItems([]);
        updateCartInLs([]);
    }

    useEffect(()=>{
        const result = localStorage.getItem("cartItems");
        if(result !== null){
            setCartItems(JSON.parse(result));
        }
    },[]);

    return <CartContext.Provider 
    value={{
        items: 
        cartItems, 
        addToCart, 
        removeFromCart,
        countAllItems,
        countTotalPrice,
        subTotal,
        withTax,
        clearCart,
        shipping,
        }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider

// a Single line Cart return statement.. 
export const useCart = () => useContext(CartContext);
