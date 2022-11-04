import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

//estados
const {idProducto} = useParams()
console.log(idProducto)
//userEffect llamando a la API mock

  return (
    <div>
        <ItemDetail producto={producto} />

        <ButtonBuy/>
    </div>
  )
}

export default ItemDetailContainer