import './ItemList.css'
import Item from '../Item/Item'

const ItemList=( {products} ) => {
     
    return(
        <div className='ListGroup'>
            {products.map(products => <Item key={products.id} {...products}/>)}
        </div>
        
    )
    
    
}

  
    
    
    


export default ItemList