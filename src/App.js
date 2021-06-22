import './components/Header/Header';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import Shop from './components/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router className="app">
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/product/:productId">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
