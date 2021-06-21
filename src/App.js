
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState} from 'react'

function App() {
  const [nextPage, setNextPage] = useState("Cart")
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <Header />
      {nextPage === "Cart" ? <ItemsContainer items={items}/> : <CartContainer cart={cart}/>}
    </div>
  );
}

export default App;
