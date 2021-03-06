import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.css';

const Home = ({ onIncrement, onDecrement, products }) => (
  <>
    <h3> Fruits And Vegitables</h3>
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

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Home;
