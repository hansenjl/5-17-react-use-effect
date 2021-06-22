import React, { Component } from 'react'
import './App.css';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'

export default class AppClassComponent extends Component {

    state = {
        nextPage: "Cart",
        items: [],
        cart: []
    }
  

  
    addItemToCart = (id) => {
      // which item should it add to the cart? 
      console.log(id)
      // find that item object in items and add it to the cart
      const item = this.state.items.find(i => i.id === id)
    //   setCart((mostUpToDateCart) => [...mostUpToDateCart, item])

      this.setState((mostUpToDateState) => ({cart: [...mostUpToDateState.cart, item]}))
    }
  
    changeView = () => {
    //   setNextPage((upToDatePage) => upToDatePage )
      this.setState((prevState) => {
         const newPage = prevState.nextPage === "Cart" ? "Items" : "Cart"
         return {nextPage: newPage}
      })
    }
   
  
    componentDidMount(){
        fetch('http://localhost:3004/items')
        .then(r => r.json())
        .then(data => this.setState({items: data}))
    }
      // write the stuff we want to do 
      
   
    // if this is an empty array, it will ONLY run once - componentDidMount
  

    render() {
        return (
            <div className="App">
            <Header changeView={this.changeView} whatever={this.state.nextPage}/>
            {this.state.nextPage === "Cart" ? 
            <ItemsContainer addToCart={this.addItemToCart} items={this.state.items} cart={this.state.cart}/> : 
            <CartContainer cart={this.state.cart}/>}
            </div>
        );
    }
}
