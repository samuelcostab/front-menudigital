import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBrisaDaSerra from './brisadaserra/App';
import AppMiniburg from './miniburg/App';
import AppNutriFrut from './nutrifrut/App';
import Inicio from './inicio/App';
import Footer from "./components/Footer"
import FormValidate from "./components/FormValidate"
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/miniburg" component={AppMiniburg} />
            <Route path="/brisadaserra" component={AppBrisaDaSerra} />
            <Route path="/nutrifrut" component={AppNutriFrut} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }


}
