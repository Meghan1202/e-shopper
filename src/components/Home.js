/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';
import './Home.css';

const Home = ({ products, onIncrement, onDecrement }) => (
  <>
    <div className="card__row">
      {products.map((product) => (
        <Product
          key={product.id}
          productId={product.id}
          productName={product.productName}
          productPrice={product.price}
          productQuantity={product.quantity}
          count={product.count}
          companyName={product.companyName}
          imgSrc={product.imgSrc}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product)}
        />
      ))}
    </div>
  </>
);

export default Home;
