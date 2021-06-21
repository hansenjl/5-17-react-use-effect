function Header({nextPage, switchView}){
    return(
        <div id="header">
            <h1>Shopping</h1>
            <p onClick={switchView}>View {nextPage}</p>
        </div>
    )
}

export default Header