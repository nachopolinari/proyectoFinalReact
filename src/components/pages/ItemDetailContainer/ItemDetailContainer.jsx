import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = (products) => {

//estados
// useparams captura la ruta
const {idProduct} = useParams()


//userEffect llamando a la API mock

  return (
    <div>
      <p>ItemDetailContainer</p>
        <ItemDetail products={products} />

        
    </div>
  )
}

export default ItemDetailContainer