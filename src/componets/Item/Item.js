
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

// Que es lo que la card va a mostrar

const item = ({id, name, img, price, stock, description}) =>{
    return(

        <article className='CardItem'>
            <div className='ItemCards'>

                <header className='Header'>
                    <h2 className='ItemHeader'>

                        {name}

                    </h2>
                </header>
                <picture>
                    <img src= {img} alt= {name} className='ItemImg'></img>
                </picture>

                <section className='ItemInfo'>

                    <p className='Info'>
                      Precio: ${price}
                    </p>
                    <p className='Info2'>
                       Stock disponible: {stock} 
                    </p>

                    <div className='Info3'>

                        <button className='Option'>Detalles </button>

                        <ItemCount initial={1} stock={13} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
                    </div>
                </section>

                
                    
                
            </div>
            

        </article>
    )
}

export default item;