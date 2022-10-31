import React from 'react'
import { useEffect } from 'react'
import gFetch from '../helpers/gFetch'

const ItemListContainer = ({ greeting, titulo }) => {

  useEffect(() => {
    gFetch()
      .then(resSgte => console.log(resSgte))
      .catch(err => console.log(err))
      .finally(() => console.log('finalizo la prmesa'))
  }, [])

  return (
    <div>
      {greeting}
      {titulo}


    </div>
  )
}

export default ItemListContainer