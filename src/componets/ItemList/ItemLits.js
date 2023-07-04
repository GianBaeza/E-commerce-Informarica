import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( { products } ) => {

    return(

        <div className='ListGroup'>
            {products.map((Prod) => <Item key={Prod.id} {...Prod} /> )}
        </div> 

        
    )
        
    
}

  
    
    
    


export default ItemList