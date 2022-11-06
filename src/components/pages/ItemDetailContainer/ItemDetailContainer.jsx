import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = (products) => {

const { idProducto } = useParams()
useEffect(() => {
  gFetch(idProducto)
  .then(resp => {  
    console.log(resp)
  })
  .catch(err =>console.log(err))
  .finally(() => console.log('finalizo'))
},[])


  return (
    <div>
      <p>ItemDetailContainer</p>
        <ItemDetail products={products} />

        
    </div>
  )
}

export default ItemDetailContainer