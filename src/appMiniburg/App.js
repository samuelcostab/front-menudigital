import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import FormTemplate from "./components/Form";
import { Button } from "@material-ui/core";
import logoMiniburg from "./imgs/logoMiniburg.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { bindActionCreators } from "redux"; //conecta as actions criadas
import { connect } from "react-redux"; //conecta ao state geral
import * as formActions from "../redux/actions/formActions";
import { getUrl, getItemsOrderFromProps, makeTextMessage } from "../util/general";
import "./styles/App.css"; 

class App extends Component {

  validarForm = () => {
    const { nome, endereco, complemento } = this.props.dadosCliente;
    const dadosPagamento = this.props.dadosPagamento;
    const total = this.props.total;
    //const arrayItems = this.props.products_cart;

    const arrayItems = getItemsOrderFromProps(this.props.products);

    const itemsOrderInText = makeTextMessage(arrayItems);

    if (nome && endereco && complemento) {
      return getUrl("558881411861", nome, endereco, complemento, itemsOrderInText, dadosPagamento, total);
    }
  };

  renderSendWhatsApp = () => {
    return (
      <Button
        type="submit"
        form="formCliente"
        href={this.validarForm()}
        variant="outlined"
        style={styles.buttonprimary}
      >
        <WhatsAppIcon />
        <div>Enviar para WhatsApp</div>
      </Button>
    );
  };

  render() {
    return (
      <div className="App">
        <Container className="container">
          <Col>
            <img className="logo" src={logoMiniburg} alt="Miniburg" />

            <FormTemplate />
            <br />
            {this.renderSendWhatsApp()}
          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dadosCliente: state.formReducer.dadosCliente,
  dadosPagamento: state.formReducer.dadosPagamento,
  products: state.sectionItem.products,
  products_cart: state.shopingCart.products_cart,
  total: state.sectionItem.total,
});  //repassar State para as props do componente

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = {
  buttonprimary: {
    backgroundColor: "green",
    color: "white",
    paddingLeft: "15px",
    alignItems: "space-around",
  },
};