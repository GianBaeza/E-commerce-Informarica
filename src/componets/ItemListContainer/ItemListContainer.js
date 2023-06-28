import { useEffect, useState } from 'react';
import'./ItemsListContainer.css';
import ItemList from '../ItemList/ItemLits';
import { getProducts } from '../../asyncMocks';

const ItemListContainer = ({greeting}) =>{
       
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()

            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    },  [])


    return(
        <section className="Title-S">
            <h1 className="Title">{greeting}</h1>
            
            <ItemList products={products}/>
        </section>
    )
    
    
}

export default ItemListContainer;