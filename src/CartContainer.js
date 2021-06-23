import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function CartContainer({cart}){
    const [timeLeft, setTimeLeft] = useState(60)



    useEffect(() => {
        const timerId = setInterval(()=>{
            setTimeLeft((timeLeft) => timeLeft - 1)
        }, 1000)


        // this is what happens whent he component UNmounts 
        // componentWillUnmount
        return () => {
            clearInterval(timerId)
        }
    }, [])
    // componentDidMount

   
    function showItems(){
        return cart.map(item => {
            return (
                <div key={item.id}>
                    <h3><Link to={`/items/${item.id}`}>{item.name}</Link></h3> 
                    <p>${item.price}</p>
                </div>
            )
        })
    }

    return(
        <div id="cart-container">
            <h1>You have {timeLeft} seconds left to checkout</h1>
            {showItems()}
        </div>
    )
}

export default CartContainer