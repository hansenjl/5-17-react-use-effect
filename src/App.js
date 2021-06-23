
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState, useEffect} from 'react'
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  function fetchItems(){
    fetch('http://localhost:3004/items')
    .then(r => r.json())
    .then(data => setItems(data))
  }

  function addToItems(item){
    setItems(items => [...items, item])
  }

  function addItemToCart(id){
    // which item should it add to the cart? 
    console.log(id)
    // find that item object in items and add it to the cart
    const item = items.find(i => i.id === id)
    setCart((mostUpToDateCart) => [...mostUpToDateCart, item])
  }

 

  useEffect(() => {
    // write the stuff we want to do 
     fetchItems()
     console.log("use effect ran")
  }, [])  // if this is an empty array, it will ONLY run once - componentDidMount




  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/cart">
          <CartContainer cart={cart}/>
        </Route>
        <Route exact path="/">
            <h1>Homepage</h1>
        </Route>
        <Route path="/items">
          <ItemsContainer addToCart={addItemToCart} items={items} cart={cart} addToItems={addToItems}/> 
        </Route>
        <Route path="/*">
          <h1>URL not found</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
