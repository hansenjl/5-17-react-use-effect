function CartContainer({cart}){
    function showItems(){
        return cart.map(item => {
            return (
                <div key={item.id}>
                    {item.name + item.price}
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