import {useState, useEffect} from 'react'

function CartContainer({cart}){
    const [time, setTime] = useState(60)

    useEffect(() => {
       const intervalId = setInterval(()=>{setTime(time => time - 1)}, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    console.log(time)
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
            <h1>You have {time} seconds to check out</h1>
            {showItems()}
        </div>
    )
}

export default CartContainer