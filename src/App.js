import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { cartCount } = this.state;
    const { products } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount + 1,
      products: products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count + 1 };
        }
        return eachProduct;
      }),
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
        <NavBar items={cartCount} />
        <h3> Fruits And Vegitables</h3>
        <Home
          products={products}
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
      </>
    );
  }
}
