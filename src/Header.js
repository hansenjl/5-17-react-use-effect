import {
    Link
  } from "react-router-dom";

function Header(){
    return(
        <div id="header">
            <h1>Shopping</h1>
            <Link to="/items">View Items</Link>
            <Link to="/items/new"> <h3>Add a New Item</h3></Link>
            <Link to="/cart"><img alt="cart" src="https://images.unsplash.com/photo-1595367189327-391b72c90283?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/></Link>
        
        </div>
    )
}

export default Header