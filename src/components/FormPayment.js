import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';


class FormPayment extends Component {
    state = {
        selected: "",
        value: null,
    };

    handleRadioButton = (event) => {
        this.setState({
            selected: event.target.value,
            value: null,
        }, () => this.props.REGISTRAR_METODO_PAGAMENTO(this.state));
    };

    changeValue = (value) => {
        const valueParse = parseFloat(value)
        this.setState({value: valueParse}, () => this.props.REGISTRAR_METODO_PAGAMENTO(this.state));
    }

    renderTrocoPara = () => {
        if (this.state.selected === "À vista") {
            
            return <Form.Group >
                    <Form.Label xs>Troco para</Form.Label>
                    <Form.Control onChange={e => this.changeValue(e.target.value)} type="number" placeholder="Valor" />
            </Form.Group>
        }    
    }

    render() {
        return <Container>
            <Form>
                <Form.Group as={Row}>
                    
                    <Col sm={10}>
                    <h9>Formas de Pagamento</h9>
                        <Form.Check
                            type="radio"
                            label="No Cartão"
                            name="noCartaoButton"
                            value="No Cartão"
                            id="noCartaoButton"
                            onClick={e => this.handleRadioButton(e)}
                            checked={this.state.selected === "No Cartão"}
                        />
                        <Form.Check
                            type="radio"
                            label="À vista"
                            value="À vista"
                            name="avistaButton"
                            id="avistaButton"
                            onClick={e => this.handleRadioButton(e)}
                            checked={this.state.selected === "À vista"}
                        />
                    </Col>
                    <Col sm={10}>
                        {this.renderTrocoPara()}
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    }
}

const mapStateToProps = state => ({ dadosPagamento: state.formReducer.dadosPagamento, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(FormPayment);