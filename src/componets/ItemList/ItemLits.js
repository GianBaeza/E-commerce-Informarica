
import Item from '../Item/Item';
import './ItemList.css'



const ItemList = ({products}) => {

    if (!Array.isArray(products)) {
        return <div className='h2M'>SIN STOCK HATA  LA 3 PRE ENTREGA </div>;
    }

    return(
        <div className='ListGroup'>
            
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
            
        </div>
    )
}

export default ItemList;