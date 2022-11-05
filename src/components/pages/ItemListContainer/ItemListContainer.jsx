import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import Loading from '../../Loading/Loading'
import ItemList from '../../ItemList/ItemList'

const ItemListContainer = ({ greeting, titulo }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

// useparams captura la ruta
    const { idCategory } = useParams()
    

    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(resSgte => setProducts(resSgte.filter(products => products.category === idCategory)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(resSgte => setProducts(resSgte))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    console.log(products)

    return (
        <>
            {greeting} <br />
            {titulo}

            {loading ?
                <Loading />
                :
                <ItemList products={products} />

            }


        </>
    )
}

export default ItemListContainer





// const [productos, setProductos] = useState([])
// const [loading, setLoading] = useState(true)

// useEffect(() => {
//     gFetch()
//         .then(resSgte => setProductos(resSgte))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))
// }, [])

// return {
//     <>
//     <h2>{greeting}</h2>
// {
//     loading ?
//         <h2>cargando...</h2>
//         :
//         products.map(products => <li key={products.id} > {products.name} </li>)
// }

// </>
// }