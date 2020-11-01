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
                        <div className="form-group">
                            <label htmlFor="nome">Seu nome</label>
                            <input
                                className="form-control input"
                                placeholder="Seu nome"
                                name="nome"
                                ref={register({
                                    required: "Campo obrigatório",
                                })}
                            />
                            {errors.nome && <span style={styles.erroTitle}>{errors.nome.message}</span>}
                        </div>
                    </Col>
                    <Col xs={12} sm={10} md={4}>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                className="form-control input"
                                placeholder="Seu Endereço"
                                name="endereco"
                                ref={register({
                                    required: "Campo obrigatório",
                                })}
                            />
                            {errors.endereco && <span style={styles.erroTitle}>{errors.endereco.message}</span>}
                        </div>
                    </Col>
                    <Col xs={12} sm={10} md={4}>
                        <div className="form-group">
                            <label htmlFor="complemento">Complemento</label>
                            <input
                                className="form-control input"
                                placeholder="Seu Complemento"
                                name="complemento"
                                ref={register({
                                    required: "Campo obrigatório",
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors.complemento && <span style={styles.erroTitle}>{errors.complemento.message}</span>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </form>
    );
};

const styles = {
    erroTitle: {
        color: "red"
    }
}
const mapStateToProps = state => ({ dadosCliente: state.formReducer.dadosCliente, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(formActions, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(FormClient);