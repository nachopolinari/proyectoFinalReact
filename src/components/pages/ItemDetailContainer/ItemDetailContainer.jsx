import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { idProducto } = useParams()

useEffect( () => {
const db = getFirestore()
const queryDoc = doc(db, 'products', 'iQKH5dMXyVAbnic7LSZd')
getDoc(queryDoc)
.then( resp => console.log( { id: resp.id, ...resp.data() } ))
.catch(err =>console.log(err) )
.finally( () => setLoading(false))
},[])


//   useEffect (() => {
//     gFetch()
//     .then(resp =>{
//       const item = resp.find(item => item.id === idProducto)
//       console.log(item)
//     })
// .catch (err => console.log(err))
// .finally (() => console.log('finalizo'))

//   },[])

return (
  <div>
    <p>ItemDetailContainer</p>
    <ItemDetail  />


  </div>
)
}

export default ItemDetailContainer