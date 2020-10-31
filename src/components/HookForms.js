import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as formActions from '../redux/actions/formActions';


const FormClient = (props) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => props.REGISTRAR_CLIENTE(values);//action disparada no Reduxconsole.log(values);

    return (
        <form id="formCliente" onSubmit={handleSubmit(onSubmit)}>
            <Container className="formContainer" fluid >
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={4}>
                    <label htmlFor="nome"><b>Nome</b></label>
                        <input
                            className="input"
                            placeholder="Seu Nome"
                            name="nome"
                            ref={register({
                                required: "Required",
                            })}
                        />
                        {errors.username && errors.username.message}
                    </Col>
                    <Col xs={12} sm={10} md={4}>
                    <label htmlFor="endereco"><b>Endereço</b></label>
                        <input
                            className="input"
                            placeholder="Seu Endereço"
                            name="endereco"
                            ref={register({
                                required: "Required",
                            })}
                        />
                        {errors.username && errors.username.message}
                    </Col>
                    <Col xs={12} sm={10} md={4}>
                    <label htmlFor="complemento"><b>Complemento</b></label>
                        <input
                            className="input"
                            placeholder="Seu Complemento"
                            name="complemento"
                            ref={register({
                                required: "Required",
                            })}
                        />
                        {errors.username && errors.username.message}
                    </Col>
                </Row>
            </Container>
        </form>
    );
};


const mapStateToProps = state => ({ dadosCliente: state.formReducer.dadosCliente, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(FormClient);