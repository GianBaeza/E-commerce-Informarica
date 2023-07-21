import { useEffect, useState } from 'react';
import './ItemsListContainer.css';
import ItemList from '../ItemList/ItemLits';
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/Config';



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
        const collectionRef = collection(db, 'products');

        const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

        getDocs(q)
        .then((response)=>{

            setProducts(
                response.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoryId])

        
        



    

    return (
        <div className="Title-S">

            <h1 className="Title">{greeting} </h1>



            <section className='TitleContainer'>
                <ItemList products={products} />

            </section>


        </div>

    )


}

export default ItemListContainer;