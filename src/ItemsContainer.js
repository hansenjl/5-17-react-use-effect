import FilterBar from './FilterBar'
import Item from './Item'

function ItemsContainer({items, addItem, cart}){

  function isInCart(item){
    return !!cart.find(i => i.id === item.id)
  }
    return(
        <div id="ItemsContainer">
          <FilterBar />
          {items.map(item => <Item  key={item.id}  name={item.name} image1={item.image1} image2={item.image2} price={item.price} id={item.id} addItem={addItem} isInCart={isInCart(item)}/>) }
        </div>
    )
}

export default ItemsContainer