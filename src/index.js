import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from "./components/app";
import reducers from "./reducers";

import Navbar from "./containers/navbar";
import Carousel from './containers/carousel';
import Footer from './containers/footer';
import Promo from './containers/promo';
import Product from "./components/product";
import Service from "./components/service";
import About from "./containers/about";
import Contact from "./containers/contact";
import Home from "./components/home";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path='/products/:p' component={Product} />
          <Route path='/services/:s' component={Service} />
          <Route exact path='/about'>
            <Carousel />
            <About />
          </Route>
          <Route exact path='/contact'>
            <Carousel />
            <Contact />
          </Route>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
        <Promo />
        <Footer />
      </div>
    </BrowserRouter>

  </Provider>,
  document.querySelector(".wrap-container")
);
