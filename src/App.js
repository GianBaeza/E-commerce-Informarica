import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemCount from './componets/ItemCount/ItemCount';



function App(){
  return(
    <div className="App">

      <Navbar/>


      <section className='Section1'>
        <ItemListContainer greeting={'Bienvenidos a LG'}/>
        
      </section>
      <ItemCount initial={1}  stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
      
      
      
     
    </div>
    
     
  )
}

export default App;