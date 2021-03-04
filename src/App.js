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
    const { products } = this.state;
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        products: products.map((eachProduct) => 
          (eachProduct.id === id ? {
            ...eachProduct,
            count: eachProduct.count + 1,
          } :
            eachProduct)
        ),
      };
        newState = {
          ...newState,
          cartItems: newState.products.filter((product) => product.count > 0),
        }
        console.log(newState)
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
        products: products.map((eachProduct) =>  (eachProduct.id === id && eachProduct.count> 0? {
          ...eachProduct,
          count: eachProduct.count - 1,
        } :
          eachProduct)
      ),
    };
      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count > 0),
      }
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
            <Route path="/Cart"><Cart cartItems={cartItems}/></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
