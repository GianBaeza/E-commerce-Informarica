import { useEffect, useState } from "react"
import {getProductById} from '../../asyncMocks'
import ItemDetail from "../ItemDetail/ItemDetail"







const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    useEffect(() =>{

        getProductById('3')

            .then(response => {
                setProduct(response)

            })
            .catch(error => {
            console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">

            <ItemDetail {...product} />

        </div>
    )


    

}

export default ItemDetailContainer