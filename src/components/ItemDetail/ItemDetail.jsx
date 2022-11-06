import { useCartContext } from '../../Context/CartContext'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

const ItemDetail = ( {prod = {
id:1,
name:'gorra',
price:100,
categoria:'gorras',
stock:10,
foto:'https://http2.mlstatic.com/D_NQ_NP_997759-MLA42795383457_072020-O.jpg'
}} ) => {


  
const { addItem } = useCartContext()

const onAdd = (cantidad =2 ) => {
console.log ( 'onAdd', cantidad )
addItem ( { ...producto, cantidad }) 

}

  return (
    <div>
      <h2>ItemDetail</h2>
      <img src = {`${prod.foto}`} alt={`${prod.name}` }/>
      <p>Nombre: {prod.name}</p>
      <p>Precio: {prod.price}</p>
      <p>Stock: {prod.stock}</p>
      <button onClick={ ()=>onAdd() }>agregar al carrito</button>
      {/* <ButtonBuy onAdd={onAdd}/> */}
    </div>
  )
}

export default ItemDetail