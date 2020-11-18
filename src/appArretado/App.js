import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import FormTemplate from "./components/Form";
import { Button } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logoArretado from "./imgs/logoArretado.png";
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

    const arrayItems = getItemsOrderFromProps(this.props.products);

    const itemsOrderInText = makeTextMessage(arrayItems);

    if (nome && endereco && complemento) {
      return getUrl("558881242156", nome, endereco, complemento, itemsOrderInText, dadosPagamento, total);
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
        <Container className="container" fluid>
          <Row>
            <Col>
              <img className="logo" width="200px" src={logoArretado} alt="Arretado" />
              <FormTemplate />
              <br />
              {this.renderSendWhatsApp()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dadosCliente: state.formReducer.dadosCliente,
  dadosPagamento: state.formReducer.dadosPagamento,
  products: state.sectionItem.products,
  total: state.sectionItem.total,
}); //repassar State para as props do componente

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
