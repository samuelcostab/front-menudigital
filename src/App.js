import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppGelaguela from './gelaguela/App';
import AppMiniburg from './miniburg/App';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/miniburg" component={AppMiniburg} />
            <Route path="/gelaguela" component={AppGelaguela} />
                        
          </Switch>
        </BrowserRouter>
      </div>
    );
  }


}