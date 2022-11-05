import { useState } from "react";
import { createContext } from "react";

export const CartContext= createContext( [] )

const CartContextProvider = ( {children} )=> {

 const [cartList, setCartList] = useState( [] )

 const addItem = (producto) => {
     setCartList(producto) 
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
