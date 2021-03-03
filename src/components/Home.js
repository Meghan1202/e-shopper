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
        quantity: 1,
      }, {
        id: 1,
        name: 'Apple',
        price: 40,
        quantity: 1,
      }, {
        id: 1,
        name: 'Orange',
        price: 40,
        quantity: 0,
      }, {
        id: 1,
        name: 'Coconut',
        price: 40,
        quantity: 0,
      }, {
        id: 1,
        name: 'Banana',
        price: 40,
        quantity: 0,
      }],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar items="3 items added" />
        <h3> Fruits And Vegitables</h3>
        <div className="card__row">
          {products.map((product) => (
            <Product
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productQuantity={product.quantity}
            />
          ))}
        </div>
      </>
    );
  }
}
