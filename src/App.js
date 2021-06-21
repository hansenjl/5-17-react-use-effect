
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState, useEffect} from 'react'

function App() {
  const [nextPage, setNextPage] = useState("Cart")
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3004/items')
    .then(r => r.json())
    .then(data => setItems(data))
  }, [])

  function addItem(id){
    const item = items.find(i => i.id === id)
    console.log(item)
    setCart((prevCart) => [...prevCart, item])
  }
  console.log(cart)
  function switchView(){
    setNextPage((page) => page === "Cart" ? "Items" : "Cart")
  }

  return (
    <div className="App">
      <Header switchView={switchView} nextPage={nextPage}/>
      {nextPage === "Cart" ? <ItemsContainer cart={cart} items={items} addItem={addItem}/> : <CartContainer cart={cart}/>}
    </div>
  );
}

export default App;
