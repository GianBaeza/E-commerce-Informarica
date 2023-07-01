import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    return(
        <article className="CardDetail">

            <div className=" Detail">
            
                <header className="HeaderDetail">

                    <h2 className="DetailH">
                        {name}
                    </h2>

                </header>

                    <picture>

                        <img src={img} alt={name} className="ImgDetail"></img>

                    </picture>

                    <section className="SeccionInfo">
                        <p className="InfoDD">
                            Categoria: {category}

                        </p>

                        <p className="InfoD"> 
                             Descripcion: {description}
                        
                        </p>

                        <p className="InfoDD">
                            Precio ${price}
                        
                        </p>
                
                    </section>

                    <footer className="ItemFooter">
                           <ItemCount initial={1}  stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>

                    </footer>
            </div>    

            
        </article>
    )
}

export default ItemDetail