import { Link} from "react-router-dom";



export default function Error() {

    return(
        <div>
            <h2>ERROR 404 </h2>
            <p>Pagina no encontrada.</p>

            <Link to="/">Volver</Link>
        </div>
    )
}