function CartContainer({cart}){
    function showItems(){
        return cart.map(item => {
            return (
                <div key={item.id}>
                    <h2>{item.name}</h2> 
                    <p>${item.price}</p>
                </div>
            )
        })
    }
    return(
        <div id="cart-container">
            {showItems()}
        </div>
    )
}

export default CartContainer