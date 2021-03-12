import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.css';

const Home = ({
  onIncrement, onDecrement, products,
}) => (
  <>
    {console.log(products)}
    <div data-testid="home-page">
      {Object.keys(products).map((category) => (
        <React.Fragment key={category}>
          <h3>{category}</h3>
          <div className="card__row">
            {products[category].map((product) => (
              <Product
                key={product.id}
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                productQuantity={Number.parseInt(product.stock, 10)}
                count={product.count}
                companyName={product.companyName}
                imgSrc={product.imgSrc}
                onIncrement={() => onIncrement(product.id, product.category)}
                onDecrement={() => onDecrement(product.id, product.category)}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  </>
);

Home.propTypes = {
  products: PropTypes.objectOf(PropTypes.array).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Home;
