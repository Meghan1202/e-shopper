import React from 'react';
import './NavBar.css'
export default function NavBar(props) { 
    return(<div className="topnav">
        <a href="#home" className='app__logo'>E-Shopper</a>
        <a className='active' href="#myBasket"><img id='basket__image' src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt='Basket Image'></img>My Basket<p> { props.value}</p></a>
  <a href="#allOrders">All Orders</a>
</div>)
}