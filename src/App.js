import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemCount from './componets/ItemCount/ItemCount';



function App(){
  return(
    <div className="App">
      
      <Navbar/>
    
      <ItemListContainer greeting={'Bienvenidos a GB'}/>
      
     
    </div>
    
     
  )
}

export default App;