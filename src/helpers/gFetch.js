import React from 'react'

const products = [{
        id: '1',
        name: 'Vibro',
        price: '100',
        stock: 10,
        category: 'vibros',
        image: 'https://http2.mlstatic.com/D_NQ_NP_770718-MLA43600697951_092020-O.jpg'
    },
    {
        id: '2',
        name: 'Plug',
        price: '200',
        stock: 20,
        category: 'plugs',
        image: 'https://http2.mlstatic.com/D_NQ_NP_997759-MLA42795383457_072020-O.jpg'
    },
    {
        id: '3',
        name: 'Satisfacer',
        price: '300',
        stock: 30,
        category: 'satisfacer',
        image: 'https://www.dosfarma.com/41722-home_default/satisfyer-pro-penguin-next-generation.jpg'
    }
]

export const gFetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout( () =>  {
            res ( id ? products.find( prod=> prod.id === id ) : products  )
        }, 2000)})
    }