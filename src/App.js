import './App.css';
import Error from './componets/Error/Error';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import { CartProvider } from './componets/Context/CartContext';
import Cart from './componets/Cart/Cart';
import Footer from './componets/footer/Footer';
import Checkout from './componets/Checkout.js/Checkout';












function App() {
  return (
    

      <BrowserRouter>

        <CartProvider>
          
          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/ItemlistContainer" element={<ItemListContainer greeting={'Productos'} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/Item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path="*" element={<Error />} />

          </Routes>

          <Footer/>
          
          
         
          
          
          

        </CartProvider>
        


      </BrowserRouter>




  )
}

export default App;