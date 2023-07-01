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


      <section className='Section1'>
        <ItemListContainer greeting={'Bienvenidos a LG'}/>
        
      </section>
      
      <ItemDetailContainer/>


      
      
      
      
     
    </div>
    
     
  )
}

export default App;