import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Orders/Orders';
import ThemeContext, { Theme } from './ThemeContext';

const getAllInventory = async (url) => {
  const apiResponse = await Axios.get(url);
  const jsonResponse = apiResponse.data;
  const items = jsonResponse.data.map((item) => {
    const modifiedItem = item;
    modifiedItem.stock = item.count;
    modifiedItem.count = 0;
    modifiedItem.companyName = 'Bigbasket';
    modifiedItem.imgSrc = item.img ? item.img : 'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg';
    return item;
  });
  return items;
};

const App = () => {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  useEffect(async () => {
    const inventory = await getAllInventory('/items');
    setProducts(inventory);
  }, []);

  const onIncrement = (product) => {
    setCartCount(
      product.stock > 0 ? cartCount + 1 : cartCount,
    );
    setProducts(
      products.map((item) => {
        const modifiedItem = item;
        if (item.id === product.id && item.stock > 0) {
          modifiedItem.stock -= 1;
          modifiedItem.count += 1;
        }
        return modifiedItem;
      }),
    );
  };

  const onDecrement = (product) => {
    setCartCount(
      product.count > 0 ? cartCount + 1 : cartCount,
    );
    setProducts(
      products.map((item) => {
        const modifiedItem = item;
        if (item.id === product.id && item.count > 0) {
          modifiedItem.stock += 1;
          modifiedItem.count -= 1;
        }
        return modifiedItem;
      }),
    );
  };

  const [theme, setTheme] = useState('white');

  const handleThemeChange = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };

  return (
    <>
      <input type="checkbox" value="Dark mode" onClick={handleThemeChange} />
      <span>{theme === 'white' ? 'Light mode' : 'Dark mode'}</span>
      <BrowserRouter>
        <ThemeContext.Provider value={theme === 'white' ? Theme.light : Theme.dark}>
          <NavBar items={cartCount} />
        </ThemeContext.Provider>
        <Switch>
          <Route path="/" exact>
            <Home
              products={products}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
            />
          </Route>
          <Route path="/cart"><Cart cartItems={cartItems} /></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/allOrder"><Order noOfItems={cartItems.length} cartItems={cartItems} /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
