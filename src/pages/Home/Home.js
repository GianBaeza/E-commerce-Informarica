import { Carousel } from './Carousel/Carousel'
import ItemDetailContainer from '../../componets/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../componets/ItemListContainer/ItemListContainer'
import './Home.css'


export default function Home() {
  return (
    <div className="Home">
      <div className="HomeCarrusel">
        <Carousel />
      </div>
      <section className="ProductContainer">
        <ItemListContainer className="productC" />
      </section>
      
    </div>
  );
}

