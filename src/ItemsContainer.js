import FilterBar from './FilterBar'
import Item from './Item'

function ItemsContainer({items}){
    return(
        <div id="ItemsContainer">
          <FilterBar />
          {items.map(item => <Item  key={item.id} item={item} />) }
        </div>
    )
}

export default ItemsContainer