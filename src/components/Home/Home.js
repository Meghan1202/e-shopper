/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.css';

const Home = ({
  onIncrement, onDecrement, products,
}) => (
  <>
    <div data-testid="home-page">
      {Object.keys(products).map((category) => (
        <>
          <h3>{category}</h3>
          <div className="card__row">
            {products[category].map((product) => (
              <Product
                key={product.id}
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                productQuantity={product.stock}
                count={product.count}
                companyName={product.companyName}
                imgSrc={product.imgSrc}
                onIncrement={() => onIncrement(product.id, product.category)}
                onDecrement={() => onDecrement(product.id, product.category)}
              />
            ))}
          </div>
        </>
      ))}
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
