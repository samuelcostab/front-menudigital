import React, { Component } from 'react';
import './App.css';
import AppMiniburg from './appMiniburg/App';
import AppNutriFrut from './appNutrifrut/App';
import AppArretado from './appArretado/App';
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'; //atualiza os states dos components na aplicação
import store from './redux/store'


export default class App extends Component {

  render() {     
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/miniburg" component={AppMiniburg} />
              <Route path="/arretado" component={AppArretado} />
              <Route path="/nutrifrut" component={AppNutriFrut} />
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

