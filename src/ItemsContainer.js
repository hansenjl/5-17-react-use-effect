import FilterBar from './FilterBar'
import Item from './Item'
import ItemForm from './ItemForm'
import ItemShow from './ItemShow'
import {
  Switch,
  Route
} from "react-router-dom";

function ItemsContainer({items, addToCart, cart, addToItems}){

  function isInCart(peanuts){
    return !!cart.find(i => i.id === peanuts)
  }

  return(
    <div id="ItemsContainer">
      <h3>Item Containter</h3>
     
      <Switch>
        <Route exact path="/items/new">
          <ItemForm addToItems={addToItems}/>
        </Route>
        <Route exact path="/items">
          <FilterBar />
          {items.map(item => <Item addToCart={addToCart}   key={item.id} item={item} cart={cart} inCart={isInCart(item.id)}/>) }
        </Route>
        <Route exact path="/items/:id">
          <ItemShow items={items} /> 
        </Route>
       
      </Switch>
      
    </div>
  )
}

export default ItemsContainer