import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Orders/Orders';
import ThemeContext, { Theme } from './ThemeContext';

const groupByCategory = (items) => {
  const filteredProducts = { };
  items.forEach((item) => {
    if (filteredProducts[item.category]) {
      filteredProducts[item.category].push(item);
    } else {
      filteredProducts[item.category] = [item];
    }
  });
  return filteredProducts;
};

const getAllInventory = async (url) => {
  const apiResponse = await Axios.get(url);
  const jsonResponse = apiResponse.data;
  const items = jsonResponse.data.map((item) => {
    const modifiedItem = item;
    modifiedItem.stock = item.count ? item.count : 'Sold out!';
    modifiedItem.count = 0;
    modifiedItem.companyName = 'Bigbasket';
    modifiedItem.imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/800px-Culinary_fruits_front_view.jpg';
    return item;
  });
  return groupByCategory(items);
};

const getAllPastOrders = async (url) => {
  const apiResponse = await Axios.get(url);
  const jsonResponse = apiResponse.data.data;
  const allOrders = [];
  jsonResponse.forEach((order) => {
    const orderOrganized = {};
    order.items.forEach((item) => {
      orderOrganized.id = order.id;
      orderOrganized.date = order.date;
      if (orderOrganized[item.category]) {
        orderOrganized[item.category].push(item);
      } else {
        orderOrganized[item.category] = [item];
      }
    });
    allOrders.push(orderOrganized);
  });
  return allOrders;
};

const App = () => {
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(async () => {
    const inventory = await getAllInventory('/items');
    setProducts(inventory);
  }, []);

  useEffect(async () => {
    const pastOrdersData = await getAllPastOrders('/orders');
    setAllOrders(pastOrdersData);
  }, []);

  const cartUpdate = () => {
    const cart = [];
    Object.keys(products).forEach((category) => {
      products[category].forEach((product) => {
        if (product.count) {
          cart.push(product);
        }
      });
    });
    return groupByCategory(cart);
  };

  const checkoutItems = () => {
    const cart = [];
    Object.keys(products).forEach((category) => {
      products[category].forEach((product) => {
        if (product.count) {
          cart.push(product);
        }
      });
    });
    return { items: cart };
  };

  const onIncrement = (id, category) => {
    const productWithUpdatedCount = products[category].filter((product) => {
      if (product.id === id) {
        return true;
      }
      return false;
    });
    if (productWithUpdatedCount[0].stock > 0) {
      setCartCount(cartCount + 1);
    }
    products[category] = products[category].map((product) => {
      const modifiedItem = product;
      if (product.id === id && product.stock > 0) {
        modifiedItem.stock -= 1;
        modifiedItem.count += 1;
      }
      return modifiedItem;
    });
    setProducts(products);
    setCartItems(cartUpdate());
  };

  const onDecrement = (id, category) => {
    const productWithUpdatedCount = products[category].filter((product) => {
      if (product.id === id) {
        return true;
      }
      return false;
    });
    if (productWithUpdatedCount[0].count > 0) {
      setCartCount(cartCount - 1);
    }
    products[category] = products[category].map((product) => {
      const modifiedItem = product;
      if (product.id === id && product.count > 0) {
        modifiedItem.count -= 1;
        modifiedItem.stock += 1;
      }
      return modifiedItem;
    });
    setProducts(products);
    setCartItems(cartUpdate());
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
          <Route path="/checkout"><Checkout checkoutItems={checkoutItems} /></Route>
          <Route path="/allOrder"><Order noOfItems={cartItems.length} cartItems={allOrders} /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
