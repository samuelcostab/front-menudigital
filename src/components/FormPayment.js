import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';


class FormPayment extends Component {
    state = {
        selected: "No Dinheiro",
        value: null,
    };

    handleRadioButton = (event) => {
        this.setState({
            selected: event.target.value,
            value: null,
        }, () => this.props.REGISTRAR_METODO_PAGAMENTO(this.state));
    };

    changeValue = (value) => {
        const valueParse = parseFloat(value).toFixed(2);
        this.setState({ value: isNaN(valueParse) ? null:valueParse }, () => this.props.REGISTRAR_METODO_PAGAMENTO(this.state));
    }

    renderTrocoPara = () => {
        if (this.state.selected === "No Dinheiro") {
            return <Form.Group >
                <Form.Label>Troco para</Form.Label>
                <Form.Control onChange={e => this.changeValue(e.target.value)} type="number" placeholder="Ex: 25,00" />
            </Form.Group>
        }
    }

    render() {
        return <Container fluid>
            <Row className="justify-content-center">
                <Form>
                    <Form.Group>
                        <Col xs={12} ><h6><b>Formas de Pagamento</b></h6></Col>
                        <Row xs={12} className="text-justify" style={{ justifyContent: 'space-between' }}>
                            <Form.Check
                                type="radio"
                                label="No Dinheiro"
                                value="No Dinheiro"
                                name="noDinheiroButton"
                                id="noDinheiroButton"
                                onChange={e => this.handleRadioButton(e)}
                                checked={this.state.selected === "No Dinheiro"}
                            />
                            <Form.Check
                                type="radio"
                                label="No Cartão"
                                name="noCartaoButton"
                                value="No Cartão"
                                id="noCartaoButton"
                                onChange={e => this.handleRadioButton(e)}
                                checked={this.state.selected === "No Cartão"}
                            />
                        </Row>
                    </Form.Group>
                </Form>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} md={3}>
                    {this.renderTrocoPara()}
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => ({ dadosPagamento: state.formReducer.dadosPagamento, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(FormPayment);