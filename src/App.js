import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";


function App(){
    return(
        <body className="#">
            
            <Navbar/>
            <ItemListContainer greeting={'Bienvenidos a la web (Alumno : Gian Franco Baeza)' }/>

        </body>
           
    )
}

export default App;