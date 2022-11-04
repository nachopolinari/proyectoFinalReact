import React from 'react'
import { Link } from 'react-router-dom'

const InputCount = () => {
  return (
    <>
            <Link to='/cart' >
                <button className="btn btn-outline-primary" onClick={()=>console.log('ir a cart') } >Ir al Cart</button>
            </Link>
            <Link to='/' >
                <button className="btn btn-outline-primary" onClick={()=>console.log('ir a cart') } >Seguir comprando</button>
            </Link>
        </>
  )
}

export default InputCount

