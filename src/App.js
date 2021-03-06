import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Orders/Orders';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: [{
        id: 1,
        companyName: 'Fresho',
        productName: 'Banana',
        price: 40,
        quantity: '1 kg',
        count: 0,
        imgSrc: 'assets/fruits/banana.png',
      }, {
        id: 2,
        companyName: 'Fresho',
        productName: 'Mango',
        price: 40,
        quantity: '1 kg',
        count: 0,
        imgSrc: 'assets/fruits/mango.png',
      }, {
        id: 3,
        companyName: 'Fresho',
        productName: 'Orange',
        price: 40,
        quantity: '1 kg',
        count: 0,
        imgSrc: 'assets/fruits/orange.png',
      }, {
        id: 4,
        companyName: 'Fresho',
        productName: 'Apple',
        price: 40,
        quantity: '1 kg',
        count: 0,
        imgSrc: 'assets/fruits/apple.png',
      }, {
        id: 5,
        companyName: 'Fresho',
        productName: 'Strawberry',
        price: 40,
        quantity: '1 kg',
        count: 0,
        imgSrc: 'assets/fruits/strawberry.png',
      }],
      cartCount: 0,
    };
  }

  onIncrement = (id) => {
    const { products } = this.state;
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        products: products.map((eachProduct) => (eachProduct.id === id ? {
          ...eachProduct,
          count: eachProduct.count + 1,
        }
          : eachProduct)),
      };
      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count > 0),
      };
      return newState;
    });
  }

  onDecrement = (product) => {
    if (product.count === 0) return;
    const { products } = this.state;
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount - 1,
        products: products.map(
          (eachProduct) => (eachProduct.id === product.id && eachProduct.count > 0 ? {
            ...eachProduct,
            count: eachProduct.count - 1,
          }
            : eachProduct),
        ),
      };
      newState = {
        ...newState,
        cartItems: newState.products.filter((product_) => product_.count > 0),
      };
      return newState;
    });
  }

  render() {
    const { products, cartCount, cartItems } = this.state;
    return (
      <>
        <BrowserRouter>
          <NavBar items={cartCount} />
          <Switch>
            <Route path="/" exact>
              <Home
                products={products}
                onDecrement={this.onDecrement}
                onIncrement={this.onIncrement}
              />
            </Route>
            <Route path="/cart"><Cart cartItems={cartItems} /></Route>
            <Route path="/checkout"><Checkout /></Route>
            <Route path="/allOrder"><Order noOfItems={cartItems.length} cartItems={cartItems} /></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
