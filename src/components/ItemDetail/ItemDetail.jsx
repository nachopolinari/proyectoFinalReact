import React from 'react'

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h2>ItemDetail</h2>
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <p>{producto.stock}</p>
      <img src = {`${producto.image}`} alt={`${producto.name}` }/>
    </div>
  )
}

export default ItemDetail