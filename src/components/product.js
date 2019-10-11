import React from "react";
import { Component } from "react";

import Carousel from '../containers/carousel';

import NhuaDuongDacProduct from '../containers/products/nhua_duong_dac_60_70';
import NhuaDuongLongProduct from '../containers/products/nhua_duong_long_mc70';
import VatLieuXayDungProduct from '../containers/products/vat_lieu_xay_dung';
import XeBenProduct from '../containers/products/xe_ben';
import XeRaiDaProduct from '../containers/products/xe_rai_da';
import XeRaiNhuaProduct from '../containers/products/xe_rai_nhua';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MayRaiProduct from "../containers/products/may_rai";

class Product extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <Carousel />
                <Switch>
                    <Route exact path='/products/nhua_duong_dac-60_70' component={NhuaDuongDacProduct} />
                    <Route exact path='/products/nhua_duong_long_mc70' component={NhuaDuongLongProduct} />
                    <Route exact path='/products/vat_lieu_xay_dung' component={VatLieuXayDungProduct} />
                    <Route exact path='/products/xe_rai_nhua' component={XeRaiNhuaProduct} />
                    <Route exact path='/products/xe_rai_da' component={XeRaiDaProduct} />
                    <Route exact path='/products/xe_ben' component={XeBenProduct} />
                    <Route exact path='/products/may_rai' component={MayRaiProduct} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

export default Product;