import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';


import './styles/MyFormStyle.css'


class FormClient extends Component {


    render() {

        return (
            <span>
                <Formik
                    initialValues={{
                        nome: '',
                        endereco: '',
                        complemento: '',
                    }}

                    validationSchema={Yup.object().shape({
                        nome: Yup.string()
                            .required('Campo Obrigatório!'),
                        endereco: Yup.string()
                            .required('Campo Obrigatório!'),
                        complemento: Yup.string()
                            .required('Campo Obrigatório!'),
                    })}

                    onSubmit={fields => {
                        this.props.REGISTRAR_CLIENTE(fields);//action disparada no Redux
                    }}

                    render={({ errors, status, touched }) => (
                        <Form id="formCliente">
                            <Container className="formContainer" >
                                <Row >
                                    <Col xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="nome">Nome</label>
                                            <Field name="nome" type="text" placeholder="Nome comercial" className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')} />
                                            <ErrorMessage name="nome" component="div" className="invalid-feedback" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label htmlFor="endereco">Endereço</label>
                                            <Field name="endereco" type="text" placeholder="Rua Exemplo, xxxx" className={'form-control' + (errors.endereco && touched.endereco ? ' is-invalid' : '')} />
                                            <ErrorMessage name="endereco" component="div" className="invalid-feedback" />
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label htmlFor="complemento">Complemento</label>
                                            <Field name="complemento" type="text" placeholder="Próximo ao local" className={'form-control' + (errors.complemento && touched.complemento ? ' is-invalid' : '')} />
                                            <ErrorMessage name="complemento" component="div" className="invalid-feedback" />
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </Form>
                    )}
                />

               
            </span>
        )
    }
}

const mapStateToProps = state => ({ dadosCliente: state.formReducer.dadosCliente, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(FormClient);