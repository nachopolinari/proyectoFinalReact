import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { gFetch } from '../../helpers/gFetch'

const ItemListContainer = ({ greeting, titulo }) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gFetch()
      .then(resSgte => setProductos(resSgte))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log(productos)

  return (
    <>
      {greeting}
      {titulo}

      {loading ?
        <h2>Cargando...</h2>
        :
        <ItemList/>






        )}


    </>
  )
}

export default ItemListContainer