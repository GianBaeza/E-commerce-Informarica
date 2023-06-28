
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

// Que es lo que la card va a mostrar

const item = ({id, name, img, price, stock, description}) =>{
    return(

        <article className='CardItem'>

            <header className='Header'>
                <h2 className='ItemHeader'>

                    {name}

                </h2>
            </header>
            <picture>
                <img src= {img} alt= {name} className='ItemImg'></img>
            </picture>

            <section className='ItemInfo'>
                <h3 className='infoH3'>
                    {description}
                </h3>
                <p className='Info'>
                  Precio: ${price}
                </p>
                <p className='Info'>
                   Stock disponible: {stock} 
                </p>
            </section>

            <footer className='ItemFooter'>
                <button className='Option'>Ver Detalles</button>
                <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
            

        </article>
    )
}

export default item;