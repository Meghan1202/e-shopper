import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.css';

const Home = ({ onIncrement, onDecrement, products }) => (
  <>
    <div data-testid="home-page">
      <h3> Fruits And Vegitables</h3>
      <div className="card__row">
        {products.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.stock}
            count={product.count}
            companyName={product.companyName}
            imgSrc={product.imgSrc}
            onIncrement={() => onIncrement(product)}
            onDecrement={() => onDecrement(product)}
          />
        ))}
      </div>
    </div>
  </>
);

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Home;
