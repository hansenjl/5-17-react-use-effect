import FilterBar from './FilterBar'
import Item from './Item'
import ItemForm from './ItemForm'

function ItemsContainer({items, addToCart, cart, addToItems}){

  function isInCart(id){
    return !!cart.find(i => i.id === id)
  }

  return(
    <div id="ItemsContainer">
      <FilterBar />
      {items.map(item => <Item addToCart={addToCart}   key={item.id} item={item} cart={cart} inCart={isInCart(item.id)}/>) }
      <ItemForm addToItems={addToItems}/>
    </div>
  )
}

export default ItemsContainer