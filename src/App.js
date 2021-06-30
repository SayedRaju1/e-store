import './components/Header/Header';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import Shop from './components/Shop/Shop';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import NewCollection from './components/NewCollection/NewCollection';
import Featured from './components/Featured/Featured';

export const SubTotalContext = createContext();

function App() {
  const [subTotal, setSubTotal] = useState(0)
  return (
    <SubTotalContext.Provider value={[subTotal, setSubTotal]}>
      <Router className="app">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/new-collection">
            <NewCollection />
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
    </SubTotalContext.Provider>
  );
}

export default App;
