import FilterBar from './FilterBar'
import Item from './Item'

function ItemsContainer(){
    return(
        <div id="ItemsContainer">
          <FilterBar />
          {this.props.items.map(item => <Item  key={item.id} item={item} />) }
        </div>
    )
}

export default ItemsContainer