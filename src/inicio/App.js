import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import ModalDatailsItem from '../components/ModalDatailsItem'
import  './styles/scroll-nav.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div>
        <ModalDatailsItem />
      </div>
    );
  }
}

