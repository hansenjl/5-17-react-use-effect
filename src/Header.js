function Header({changeView, whatever}){
    return(
        <div id="header">
            <h1>Shopping</h1>
            <p onClick={changeView}>View {whatever}</p>
        </div>
    )
}

export default Header