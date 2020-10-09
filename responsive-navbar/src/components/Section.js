import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import About from './section/About';
import Blog from './section/Blog';
import Contact from './section/Contact';
import Home from './section/Home';
import Login from './section/Login';

class Section extends Component {
    render() {
        return (
            <section>
                <h1>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                </h1>
            </section>
        );
    }
}

export default Section;