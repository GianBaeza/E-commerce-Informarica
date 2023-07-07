import { useEffect, useState } from 'react';
import'./ItemsListContainer.css';
import ItemList from '../ItemList/ItemLits';
import { getProducts , getProductsByCategory } from '../../asyncMocks';
import { useParams } from 'react-router-dom';
import { Carousel } from '../Carousel/Carousel';



const ItemListContainer = ({greeting}) => {
       
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() =>{
        const asyncFunc = categoryId ? getProductsByCategory(categoryId)  : getProducts(products)

        asyncFunc
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
            
    }, [categoryId]);

    return(
        <div className="Title-S">
            
            <h1 className="Title">{greeting} </h1>
            
            
           
            <section >
              <ItemList products={products} />

            </section>
            
        </div>
       
    )
    
    
}

export default ItemListContainer;