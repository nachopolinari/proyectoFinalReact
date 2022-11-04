import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import Intercambiabilidad from '../../ButtonBuy/ButtonBuy'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'


const ItemListContainer = ({ greeting, titulo }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const { idCategory } = useParams()
    console.log(idCategory)

    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(resSgte => setProductos(resSgte.filter(producto=>producto.category===idCategory)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(resSgte => setProductos(resSgte))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    console.log(productos)

    return (
        <>
            {greeting} <br />
            {titulo}

            {loading ?
                <h2>Cargando...</h2>
                :
                productos.map(products => <div
                    key={products.id}>
                    <Link to={`/detalle/${products.id}`}>
                        <div className="card" >
                            <img src={products.picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{products.name} </h5>
                                <p className="card-text">Color: <br />
                                    Precio: ${products.price}  <br />
                                    Categoria:  </p>
                                <ButtonBuy/>
                            </div>
                        </div>
                    </Link>
                </div>

                )
            }


        </>
    )
}

export default ItemListContainer