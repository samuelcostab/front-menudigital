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
      itemsOrder: "",
      unityItemsOrder: "",
      observation: "",
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

    let msg = `*Cliente:* ${nome}`
      + `%0A*Endereço:* ${endereco}`
      + `%0A*Complemento:* ${complemento}`
      + "%0A" + this.state.itemsOrder
      + "%0A" + this.state.unityItemsOrder
      + "%0A%0A*Observação:* " + this.state.observation
      + `%0A%0A*Total:* R$ ${total}`

    url = url + msg;

    return url;

  }


  validarForm = () => {
    const { nome, endereco, complemento } = this.props.dadosCliente;
    const total = this.props.total;

    const arrayItems = this.getItemsOrderFromProps();

    arrayItems.forEach((item) => {
      //pra cada array de itens tem que retornar os items
      // e colocar em uma única string ex: "nome + tam  qtd  subTotal"
      //                                   "nome + tam  qtd  subTotal"  
     });

    if (nome && endereco && complemento) {
      return this.getUrl(nome, endereco, complemento, total);
    }
  }

  getItemsOrderFromProps = () => {
    const items = this.props.products
      .map(el => {
        const arrayItems = []
        if (el.qtdG > 0) {
          const subTotalItem = (el.qtdG * el.valueG).toFixed(2);
          const { nameItem, qtdG } = el;

          arrayItems.push({ nameItem: `${nameItem} G`, qtd:qtdG, subTotalItem });
        }
        if (el.qtdM > 0) {
          const subTotalItem = (el.qtdM * el.valueM).toFixed(2);
          const { nameItem, qtdM } = el;

          arrayItems.push({ nameItem: `${nameItem} M`, qtd:qtdM, subTotalItem });
        }
        if (el.qtdP > 0) {
          const subTotalItem = (el.qtdP * el.valueP).toFixed(2);
          const { nameItem, qtdP } = el;

          arrayItems.push({ nameItem: `${nameItem} P`, qtd:qtdP, subTotalItem });
        }

        return arrayItems;
      });

    console.log('ItemsRedux', items);

    return items //retorna uma lista de arrays de itens


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

            <FormTemplate />
            <br />

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

});//repassar State para as props do componente

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = {
  buttonprimary: {
    backgroundColor: "#0C9",
    color: "white",
    paddingLeft: "15px",
    alignItems: "space-around",
  }
}