import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import './App.css';



function App(){
  return(
    <div className="App">
      
      <Navbar/>
    
      <ItemListContainer greeting={'Bienvenidos a GB' }/>
      


     
    </div>
    
     
  )
}

export default App;