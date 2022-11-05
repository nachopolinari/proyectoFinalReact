import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

const Item = ( prod ) => {
  return (
    <div>
      <Link to={`/detalle/${prod.key}`}>

        <div className="card" >
          <img src={prod.image} className="card-img-top" alt={prod.name} />
          <div className="card-body">
            <h3 className="card-title">{prod.name} </h3>
            <p> Precio: ${prod.price}</p>
            <ButtonBuy key={prod.key} />
          </div>
        </div>
        
      </Link>
    </div>
  )
}

export default Item