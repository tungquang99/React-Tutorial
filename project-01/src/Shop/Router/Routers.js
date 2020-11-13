import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Product from '../Product/Product'
import ItemPro from '../Detail_Pro/ItemPro';

export default class Routers extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <Route exact path="/product" component={Product} />
                <Route exact path="/item-pro/:slug.:id" component={ItemPro} />
            </div>
        )
    }
}
