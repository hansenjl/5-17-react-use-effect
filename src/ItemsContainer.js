import FilterBar from './FilterBar'
import Item from './Item'

function ItemsContainer({items, addToCart, cart}){

  function isInCart(id){
    return !!cart.find(i => i.id === id)
 }
    return(
        <div id="ItemsContainer">
          <FilterBar />
          {items.map(item => <Item addToCart={addToCart}   key={item.id} item={item} cart={cart} inCart={isInCart(item.id)}/>) }
        </div>
    )
}

export default ItemsContainer