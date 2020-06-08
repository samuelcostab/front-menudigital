import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import FormTemplate from './components/Form';
import { Button } from '@material-ui/core';
import './styles/App.css';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      custumer: "",
      end: "",
      complement: "",
      itemsOrder: "",
      unityItemsOrder: "",
      observation: "",
      totalPrice: 0,
      formVerify: false,

    };
  }

  getUrl = () => {
    let url = "";

    if (window.innerWidth > 667) {
      url = "https://web.whatsapp.com/send?phone=558896518928&text="
    }
    else {
      url = "https://api.whatsapp.com/send?phone=558896518928&text="
    }


    let msg = "*Cliente:* " + this.state.custumer
      + "%0A*Endereço:* " + this.state.end
      + "%0A*Complemento:* " + this.state.complement
      + "%0A" + this.state.itemsOrder
      + "%0A" + this.state.unityItemsOrder
      + "%0A%0A*Observação:* " + this.state.observation
      + "%0A%0A*Total:* R$ " + this.state.totalPrice.toFixed(2);

    url = url + msg;

    return url;

  }

  /*testSendAPI = () => {
    const data = {
      cliente: this.state.custumer,
      endereco: this.state.end,
	    complemento: this.state.complement,
      items: this.state.itemsOrder,
      total: this.state.totalPrice
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '1'
    }

    axios.post(`http://localhost:3333/restaurante/pedido`, data, {headers:headers})
      .then(res => {
        console.log(data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      })
  }*/

  getOrderByClient = (state) => {
    const { custumer, end, complement, 
            itemsOrder, unityItemsOrder, 
            sumValuesItem, sumValuesUnityItem, observation } = state;

    let totalPrice = sumValuesItem + sumValuesUnityItem;

    this.setState({
      custumer: custumer,
      end: end,
      complement: complement,
      itemsOrder: itemsOrder,
      unityItemsOrder: unityItemsOrder,
      totalPrice: totalPrice,
      observation: observation
    }, () => { });
  }

  renderSendWhatsApp = () => {
    const { custumer, end, complement} = this.state;
    if ((custumer === "") || (end === "") || (complement === "")) {
      return (
        <Button disabled
          href="#"
          variant="outlined"
          color="primary" >
          Enviar para WhatsApp
        </Button>
      );

    }
    return <Button
      href={this.getUrl()}
      variant="outlined"
      color="primary" >
      Enviar para WhatsApp
    </Button>
  }


  render() {
    return (
      <div className="App">
        <Container className="container">
          <Col>
            <FormTemplate getOrderByClient={this.getOrderByClient.bind(this)} />
            <br />
            {this.renderSendWhatsApp()}

          </Col>
        </Container>
      </div>
    );
  }
}