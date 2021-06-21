
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState} from 'react'

function App() {
  const [page, setPage] = useState("Items")
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <Header />
      {page === "Items" ? <ItemsContainer items={items}/> : <CartContainer cart={cart}/>}
    </div>
  );
}

export default App;
