import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";


function App(){
    return(
        <body>
            <header>
              <Navbar/>
            </header>
            
            <section>
              <ItemListContainer greeting={'Bienvenidos a GB' }/>
            </section>


            <footer>
                
            </footer>

        </body>
           
    )
}

export default App;