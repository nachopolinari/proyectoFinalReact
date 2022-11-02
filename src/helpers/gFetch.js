import React from 'react'

const products = [
    {id: '1',name: 'Camisa',price: '100',stock: 10,category: 'camisas'},
    {id: '2',name: 'Pantalon',price: '200',stock: 20,category: 'pantalones'},
    {id: '3',name: 'Gorra',price: '300',stock: 30,category: 'gorras'}
]

export const gFetch = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(products)
        }, 3000)


    })
}