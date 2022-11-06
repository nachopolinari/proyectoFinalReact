import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext= createContext( [] )
export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ( {children} )=> {

 const [cartList, setCartList] = useState( [] )

 const addItem = (producto) => {
     setCartList([ ...cartList,producto]) 
     }


    return (
        <CartContext.Provider value = { { 
            cartList, 
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
