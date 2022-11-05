import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div>
            {products.map((prod) => (
                <>
                    <Item key={prod.id} prod={prod} />
                </>
            ))}

        </div>
    );
}

export default ItemList