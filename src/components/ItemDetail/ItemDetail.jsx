import React, { useContext } from 'react'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

const ItemDetail = ( {producto = {
id:1,
name:'gorra',
price:100,
categoria:'gorras',
stock:10,
foto:'https://http2.mlstatic.com/D_NQ_NP_997759-MLA42795383457_072020-O.jpg'
}} ) => {


  
const {addItem, cartList} = useContext (CartContext)

const onAdd = (cantidad =2 ) => {
console.log ( 'onAdd', cantidad )
addItem ( { ...producto, cantidad }) 

}
console.log(cartList)
  return (
    <div>
      <h2>ItemDetail</h2>
      <img src = {`${productos.image}`} alt={`${productos.name}` }/>
      <p>{productos.name}</p>
      <p>{productos.price}</p>
      <p>{productos.stock}</p>
      <button onClick={ ()=>onAdd() }>agregar al carrito</button>
      {/* <ButtonBuy onAdd={onAdd}/> */}
    </div>
  )
}

export default ItemDetail