import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemCount from './componets/ItemCount/ItemCount';



function App(){
  return(
    <div className="App">
      
      <Navbar/>
    
      <ItemListContainer greeting={'Bienvenidos a GB' }/>
      <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
      


     
    </div>
    
     
  )
}

export default App;