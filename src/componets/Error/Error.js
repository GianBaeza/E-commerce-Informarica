import { Link} from "react-router-dom";



export default function Error() {

    return(
        <div className="contariner">
            <h2 className="404">ERROR 404 </h2>
            <p className="p404">Pagina no encontrada.</p>

            <Link to="/" className="Vo">Volver</Link>
        </div>
    )
}