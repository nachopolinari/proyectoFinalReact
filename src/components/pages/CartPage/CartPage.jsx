import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const CartPage = () => {

  const {cartList} = useCartContext()
  return (
    <div>
<ul>
  { cartList.map((producto)=>   
  <li>
    `{producto.name}`  
  </li>)}
</ul>


    </div>
  )
}

export default CartPage