import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

const Item = ( {prod} ) => {
  return (
    
    <div 
    style= { { marginLeft:100 } } 
    className= 'col-md-3'
    >
      <Link to = { `/detail/ ${prod.id}` } >

        <div className="card" >
          <img src={`${prod.image}`} className="card-img-top" alt={`${prod.name}`}  />
          <div className="card-body">
            <h3 className="card-title">{`${prod.name}`} </h3>
            <p> Precio: ${`${prod.price}`}</p>
            <ButtonBuy key={prod.id} />
          </div>
        </div>
        
      </Link>
    </div>
  )
}

export default Item