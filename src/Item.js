import React from 'react'

const Item = React.memo(function(props){

    const {name, image1, image2, price, id, addItem, isInCart} = props

     console.log("item: ", id)
    return (
        <div className="item" id={id + "-item"}>
            <h3>{name}</h3>
            <img alt={name + " image"} src={image1}/>
            <br/>
            Price: {price}
            <br/>
           {
               isInCart ? <p>In Cart</p> : <button onClick={()=> addItem(id) }>Add To Cart</button>
           } 
        </div>
    )
}, (prevProps, newProps) => {
    return prevProps.isInCart === newProps.isInCart
})

export default Item