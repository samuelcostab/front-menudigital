import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import FormTemplate from './components/Form';
import { Button } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './styles/App.css';

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';

class App extends Component {
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
      sendData: false,

    };
  }

  getUrl = (nome, endereco, complemento) => {
    let url = "";

    if (window.innerWidth > 667) {
      url = "https://web.whatsapp.com/send?phone=558896518928&text="
    }
    else {
      url = "https://api.whatsapp.com/send?phone=558896518928&text="
    }

    //+ "%0A" + this.state.itemsOrder
    let msg = "*Cliente:* " + nome
      + "%0A*Endereço:* " + endereco
      + "%0A*Complemento:* " + complemento
      + "%0A" + this.state.unityItemsOrder
      + "%0A%0A*Observação:* " + this.state.observation
      + "%0A%0A*Total:* R$ " + this.state.totalPrice.toFixed(2);

    url = url + msg;

    return url;

  }

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


  validarForm = () => {
    const { nome, endereco, complemento } = this.props.dadosCliente;
    
    if (nome && endereco && complemento) {
      return this.getUrl(nome, endereco, complemento);
    }
  }

  renderSendWhatsApp = () => {
    return <Button
      type="submit"
      form="formCliente"
      href={this.validarForm()}
      variant="outlined"
      style={styles.buttonprimary}
      onClick={this.testSendAPI} >
      <WhatsAppIcon />
      <div>
        Enviar para WhatsApp
      </div>
    </Button>
  }


  render() {
    return (
      <div className="App">
        <Container className="container">
          <Col>
            <FormTemplate getOrderByClient={this.getOrderByClient.bind(this)} />

            {this.renderSendWhatsApp()}

          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({ dadosCliente: state.formReducer.dadosCliente, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = {
  buttonprimary: {
    backgroundColor: "#0C9",
    color: "white",
    paddingLeft: "15px",
    alignItems: "space-around",
    //outline: 2px dashed blue,
  }
}