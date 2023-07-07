  import { Carousel } from '../../componets/Carousel/Carousel'
import ItemDetailContainer from '../../componets/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../componets/ItemListContainer/ItemListContainer'
import './Home.css'

  export default function Home(){
    return(
        <div className='CHome'>
            <Carousel/>
            <ItemListContainer/>
        </div>
    )
    


}

  