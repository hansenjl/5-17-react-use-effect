
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState, useEffect} from 'react'

function App() {
  const [nextPage, setNextPage] = useState("Cart")
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  function fetchItems(){
    fetch('http://localhost:3004/items')
    .then(r => r.json())
    .then(data => setItems(data))
  }

  function addItemToCart(id){
    // which item should it add to the cart? 
    console.log(id)
    // find that item object in items and add it to the cart
    const item = items.find(i => i.id === id)
    setCart((mostUpToDateCart) => [...mostUpToDateCart, item])
  }

  function changeView(){
    setNextPage((upToDatePage) => upToDatePage === "Cart" ? "Items" : "Cart")
  }
 

  useEffect(() => {
    // write the stuff we want to do 
     fetchItems()
     console.log("use effect ran")
  }, [])  // if this is an empty array, it will ONLY run once - componentDidMount




  return (
    <div className="App">
      <Header changeView={changeView} whatever={nextPage}/>
      {nextPage === "Cart" ? 
      <ItemsContainer addToCart={addItemToCart} items={items} cart={cart}/> : <CartContainer cart={cart}/>}
    </div>
  );
}

export default App;
