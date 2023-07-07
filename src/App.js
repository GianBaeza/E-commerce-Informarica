import './App.css';
import Error from './componets/Error/Error';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemCount from './componets/ItemCount/ItemCount';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home/Home';
import { Carousel } from 'bootstrap';









function App(){
  return(
    <div className='App'>

      <BrowserRouter>

        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path = "/ItemlistContainer" element= {<ItemListContainer greeting={'Productos'}/>}/> 
        <Route path = "/category/:categoryId" element={<ItemListContainer />}/> 
        <Route path = "/Item/:itemId" element={<ItemDetailContainer />}/>
        <Route path = "*" element={<Error/>} />
           
        </Routes>

      </BrowserRouter>


      
      
      
      
     
    </div>
    
     
  )
}

export default App;