import React from 'react'
import { useEffect, useState } from 'react'
import { gFetch } from '../../../helpers/gFetch'


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
      {greeting} <br />
      {titulo}

      {loading ?
        <h2>Cargando...</h2>
        :
        productos.map(products => <div key={products.id}>
          <div className="card" >
            <img src={products.picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{products.name} </h5>
              <p className="card-text">Color: <br />
                Precio: ${products.price}  <br />
                Categoria:  </p>
              <a href="#" className="btn btn-primary">Ver detalles</a>
              <button>Comprar</button>
            </div>
          </div>
        </div>

        )
      }


    </>
  )
}

export default ItemListContainer