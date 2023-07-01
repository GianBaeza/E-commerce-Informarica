import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemCount from './componets/ItemCount/ItemCount';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App(){
  return(
    <div>

      <Navbar/>


      
        <ItemListContainer greeting={'Bienvenidos a LG'}/>
        
      
      
      <ItemDetailContainer/>


      
      
      
      
     
    </div>
    
     
  )
}

export default App;