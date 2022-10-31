import React from 'react'

const products = [
    {id: '1',name: 'Camisa',price: '100',stock: 10,category: 'camisas',foto: ''}
    {id: '2',name: 'Pantalon',price: '200',stock: 20,category: 'pantalones',foto: ''}
    {id: '3',name: 'Gorra',price: '300',stock: 30,category: 'gorras',foto: ''}
]

const gFetch = () => {
    return new Promises((res, rej) => {
        res(products)
        rej()
      
    })
}

export default gFetch