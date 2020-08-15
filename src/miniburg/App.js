import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import FormTemplate from './components/Form';
import { Button } from '@material-ui/core';
import logoMiniburg from './imgs/logoMiniburg.png';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';

import './styles/App.css';

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

    };
  }

  getUrl = (nome, endereco, complemento, total) => {
    let url = "";

    if (window.innerWidth > 667) {
      url = "https://web.whatsapp.com/send?phone=558881411861&text="
    }
    else {
      url = "https://api.whatsapp.com/send?phone=558881411861&text="
    }

    let msg = "*Cliente:* " + nome
      + "%0A*Endereço:* " + endereco
      + "%0A*Complemento:* " + complemento
      + "%0A" + this.state.itemsOrder
      + "%0A" + this.state.unityItemsOrder
      + "%0A%0A*Observação:* " + this.state.observation
      + `%0A%0A*Total:* R$ ${total}`

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
    const total = this.props.total;
    
    if (nome && endereco && complemento) {
      return this.getUrl(nome, endereco, complemento, total);
    }
  }

  renderSendWhatsApp = () => {
    return <Button
      type="submit"
      form="formCliente"
      href={this.validarForm()}
      variant="outlined"
      style={styles.buttonprimary} >
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
            <img className="logo" src={logoMiniburg}
              alt="Miniburg" />
            
            <FormTemplate getOrderByClient={this.getOrderByClient.bind(this)} />
            <br />
            {this.props.state}
            {this.renderSendWhatsApp()}

          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
   dadosCliente: state.formReducer.dadosCliente, 
   products: state.sectionItem.products,
   total: state.sectionItem.total,
  
  });//repassar State para as props

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