import './components/Header/Header';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import Shop from './components/Shop/Shop';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import NewCollection from './components/NewCollection/NewCollection';
import Featured from './components/Featured/Featured';
import NotFound from './components/NotFound/NotFound';

export const SubTotalContext = createContext();
export const CurveContext = createContext();

function App() {
  const [subTotal, setSubTotal] = useState(0)
  const [curve, setCurve] = useState(false)
  return (
    <CurveContext.Provider value={[curve, setCurve]}>
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
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </SubTotalContext.Provider>
    </CurveContext.Provider>
  );
}

export default App;
