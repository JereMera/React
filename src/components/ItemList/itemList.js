import './itemlist.css'
import Item from '../Item/item'
import { memo } from 'react'


const ItemList = ({ products }) => {
    return(
        
        <div className='ListGroup'>
            
            {products.map(prod => <Item key={prod.id} {...prod} />)}
           
        </div>    
    )
}

export default memo(ItemList)