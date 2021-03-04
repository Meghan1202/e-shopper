import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
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
    const { cartCount, products,cartItems } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount + 1,
      products: products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count + 1 };
        }
        return eachProduct;
      }),
      cartItems: products.filter((product) => product.count > 0),
    };

    this.setState(newState);
  }

  onDecrement = (product) => {
    const { cartCount } = this.state;
    if (product.count === 0) return;
    const { products } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount - 1,
      products: products.map((eachProduct) => {
        if (eachProduct.id === product.id && eachProduct.count > 0) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  render() {
    const { products, cartCount } = this.state;
    return (
      <>
        <BrowserRouter>
          <NavBar items={cartCount} cartItems={cartItems} />
          <Switch>
            <Route path="/" exact>
              <Home
                products={products}
                onDecrement={this.onDecrement}
                onIncrement={this.onIncrement}
              />
            </Route>
            <Route path="/Cart"><Cart /></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
