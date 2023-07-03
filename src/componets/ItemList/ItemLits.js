
import Item from '../Item/Item';
import './ItemList.css'



const ItemList = ({products}) => {

    if (!Array.isArray(products)) {
        return <div className='h2M'>No encontrado</div>;
    }

    return(
        <div className='ListGroup'>
            
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
            
        </div>
    )
}

export default ItemList;