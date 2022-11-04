import React from 'react'

const products = [
    {id: '1',name: 'Vibro',price: '100',stock: 10,category: 'vibros'},
    {id: '2',name: 'Plug',price: '200',stock: 20,category: 'plugs'},
    {id: '3',name: 'Satisfacer',price: '300',stock: 30,category: 'satisfacer'}
]

export const gFetch = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(products)
        }, 2000)


    })
}