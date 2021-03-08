import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Orders/Orders';
import Counter from './components/Counter/Counter';
import ThemeContext, { Theme } from './ThemeContext';

const App = () => {
  const [products, setProducts] = useState({
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
    }, {
      id: 6,
      companyName: 'Fresho',
      productName: 'Strawberry',
      price: 40,
      quantity: '1 kg',
      count: 0,
      imgSrc: 'assets/fruits/strawberry.png',
    }, {
      id: 7,
      companyName: 'Fresho',
      productName: 'Strawberry',
      price: 40,
      quantity: '1 kg',
      count: 0,
      imgSrc: 'assets/fruits/strawberry.png',
    }, {
      id: 8,
      companyName: 'Fresho',
      productName: 'Strawberry',
      price: 40,
      quantity: '1 kg',
      count: 0,
      imgSrc: 'assets/fruits/strawberry.png',
    }],
    cartCount: 0,
  });

  const onIncrement = (id) => {
    setProducts((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        products: products.products.map((eachProduct) => (eachProduct.id === id ? {
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
  };

  const onDecrement = (product) => {
    if (product.count === 0) return;
    setProducts((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount - 1,
        products: products.products.map(
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
  };
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={Theme.light}>
          <NavBar items={products.cartCount} />
        </ThemeContext.Provider>
        <Switch>
          <Route path="/" exact>
            <Home
              products={products.products}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
            />
          </Route>
          <Route path="/cart"><Cart cartItems={products.cartItems} /></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/allOrder"><Order noOfItems={products.cartItems.length} cartItems={products.cartItems} /></Route>
          <Route path="/counter"><Counter /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
