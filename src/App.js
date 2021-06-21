
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import {useState, useEffect} from 'react'

function App() {
  const [nextPage, setNextPage] = useState("Cart")
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [moreItems, setMoreItems] = useState(true)

  useEffect(()=>{
    fetch(`http://localhost:3004/items?_page=${pageNum}&_limit=3`)
    .then(r => r.json())
    .then(data => {
      if(data.length < 3){
        setMoreItems(false)
      } 
      if(data.length > 0 ){
        setItems(currentItems => [...currentItems, ...data])
      }
      
    })
  }, [pageNum])

  function addItem(id){
    const item = items.find(i => i.id === id)
    console.log(item)
    setCart((prevCart) => [...prevCart, item])
  }
  console.log(cart)
  function switchView(){
    setNextPage((page) => page === "Cart" ? "Items" : "Cart")
  }

  function fetchMoreItems(){
    setPageNum((pg) => pg +1)
  }

  return (
    <div className="App">
      <Header switchView={switchView} nextPage={nextPage}/>
      {nextPage === "Cart" ? 
      <ItemsContainer fetchMoreItems={fetchMoreItems} moreItems={moreItems}cart={cart} items={items} addItem={addItem}/> : 
      <CartContainer cart={cart}/>}
      </div>
     
  );
}

export default App;
