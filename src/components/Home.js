import React from 'react';
import Product from './Product';
import './Home.css';
import NavBar from './NavBar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 1,
        name: 'Banana',
        price: 40,
        quantity: 0,
      }, {
        id: 2,
        name: 'Apple',
        price: 40,
        quantity: 0,
      }, {
        id: 3,
        name: 'Orange',
        price: 40,
        quantity: 0,
      }, {
        id: 4,
        name: 'Coconut',
        price: 40,
        quantity: 0,
      }, {
        id: 5,
        name: 'Banana',
        price: 40,
        quantity: 0,
      }],
      cartCount: 0,
    };
  }

  onIncrement(id) {
    const { cartCount } = this.state;
    const { products } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount + 1,
      products: products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, quantity: eachProduct.quantity + 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  onDecrement(id) {
    const { cartCount } = this.state;
    if (cartCount === 0) return;
    const { products } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount - 1,
      products: products.map((eachProduct) => {
        if (eachProduct.id === id && eachProduct.quantity > 0) {
          return { ...eachProduct, quantity: eachProduct.quantity - 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  render() {
    const { products } = this.state;
    const { cartCount } = this.state;
    return (
      <>
        <NavBar items={cartCount} />
        <h3> Fruits And Vegitables</h3>
        <div className="card__row">
          {products.map((product) => (
            <Product
              key={product.id}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productQuantity={product.quantity}
              onIncrement={() => { this.onIncrement(product.id); }}
              onDecrement={() => { this.onDecrement(product.id); }}
            />
          ))}
        </div>
      </>
    );
  }
}
