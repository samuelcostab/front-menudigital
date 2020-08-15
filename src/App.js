import React, { Component } from 'react';
import './App.css';
import AppBrisaDaSerra from './brisadaserra/App';
import AppMiniburg from './miniburg/App';
import AppNutriFrut from './nutrifrut/App';
import Inicio from './inicio/App';
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'; //atualiza os states dos components na aplicação
import store from './redux/store'

export default class App extends Component {


  render() {
    console.log(store);
    
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={AppMiniburg} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    );
  }


}


// <Route path="/miniburg" component={AppMiniburg} />
// <Route path="/gelaguela" component={AppGelaguela} />
// <Route path="/nutrifrut" component={AppNutriFrut} />

