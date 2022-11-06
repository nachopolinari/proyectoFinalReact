import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div
            style={{
                display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            }}
        >
            {products.map(prod => <Item  key={ prod.id } prod= { prod } />    )}

        </div>
    )
}

export default ItemList