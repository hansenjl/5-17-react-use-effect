//should component update
import React from 'react'

const Item = React.memo(function(props){
    const {item: {name, image1, image2, price, id}, addToCart, inCart} = props
    function handleClick(e){
          addToCart(id)
    }

   

    console.log("rendering item: ", id)
    return (
        <div className="item" id={id + "-item"}>
            <h3>{name}</h3>
            <img alt={name + " image"} src={image1}/>
            <br/>
            Price: {price}
            <br/>
            { inCart ? <p>In Cart</p> : <button onClick={handleClick}>Add To Cart</button>}
            
      
            </div>
    )
}, (newProps, oldProps) => {
    // if this function returns true, it will NOT rerender
   return newProps.inCart  === oldProps.inCart
})

export default Item