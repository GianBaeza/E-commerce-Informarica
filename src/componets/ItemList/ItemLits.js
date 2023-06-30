
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = ({products}) =>{
    return(
        <div className='ListGroup'>
            <h2 className='h2M'> Mouse </h2>

            
            <section className='Group'> 

                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </section>

        </div>
    )
}

export default ItemList;