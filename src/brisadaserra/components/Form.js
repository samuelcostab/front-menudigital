import React, { Component } from 'react';
import Section from './Section';
import {
    FormControl,
    TextField,
    Grid
} from '@material-ui/core';

import '../styles/Form.css';
import TotalPrice from '../../components/TotalPrice';


const espetinhos = [
    {
        item: "Frango",
        tamanho: "",
        valor: "R$ 4.00",
    },
    {
        item: "Coração de Frango",
        tamanho: "",
        valor: "R$ 4.00",
    },
    {
        item: "Carne Bovina",
        tamanho: "",
        valor: "R$ 4.00",
    },
    {
        item: "Porco",
        tamanho: "",
        valor: "R$ 4.00",
    },
    {
        item: "Frango com Banco",
        tamanho: "",
        valor: "R$ 4.50",
    },
    {
        item: "Asinha de Frango",
        tamanho: "",
        valor: "R$ 4.50",
    },
    {
        item: "Coxinha de Frango",
        tamanho: "",
        valor: "R$ 4.50",
    },
    {
        item: "Camarão",
        tamanho: "",
        valor: "R$ 5.00",
    },
]

const acompanhamentos = [
    {
        item: "Batata-frita Pequena",
        tamanho: "",
        valor: "R$ 5.00",
    },
    {
        item: "Baião de Dois",
        tamanho: "",
        valor: "R$ 6.00",
    },

]

const cevejas = [
    {
        item: "SKOL",
        tamanho: "300 ml",
        valor: "R$ 3.00",
    },
    {
        item: "HEINEKEN",
        tamanho: "330 ml",
        valor: "R$ 5.50",
    }
]

export default class FormTemplate extends Component {
    constructor(props) {
        super(props);

        this.items = [3]

        this.state = {
            custumer: "",
            end: "",
            complement: "",
            observation: "",
            itemsOrder: [],
            unityItemsOrder: [],
            unityItemsOrderII: [],
            sumValuesItem: 0,
            sumValuesUnityItem: 0,
            sumValuesUnityItemII: 0,
        };
    }

    getValueSection = (state) => {
        let { itemsOrder, subTotals, nameSection } = state;

        let sumValues = 0;
        subTotals.forEach(valor => {
            sumValues += valor;
        });

        if (nameSection === "Espetinhos") {
            this.setState({ itemsOrder: itemsOrder, sumValuesItem: sumValues },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        } else if( nameSection === "Acompanhamentos") {
            this.setState({ unityItemsOrder: itemsOrder, sumValuesUnityItem: sumValues },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        } else {
            this.setState({ unityItemsOrderII: itemsOrder, sumValuesUnityItemII: sumValues },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        }



    }

    handleInput = (e) => {
        if (e.target.id === "input-nome") {
            this.setState({ custumer: e.target.value }, () => { });
        }
        if (e.target.id === "input-endereco") {
            this.setState({ end: e.target.value }, () => { });
        }
        if (e.target.id === "input-complemento") {
            this.setState({ complement: e.target.value },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        }
        if (e.target.id === "input-observacao") {
            this.setState({ observation: e.target.value },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        }


    }


    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="logoEmpresa">
                        <h1>Espetinho Brisa da Serra</h1>
                        <h6>Qualidade diferenciada em Espetinhos!</h6>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <FormControl >
                        <TextField style={styles.inputText}
                            id="input-nome"
                            label="Nome Cliente"
                            helperText="Este campo é importante!"
                            variant="outlined"
                            onChange={this.handleInput} />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl >
                        <TextField style={styles.inputText}
                            id="input-endereco"
                            label="Endereço"
                            helperText="Este campo é importante!"
                            placeholder="Rua xxxx, 10000, Localidade"
                            variant="outlined"
                            onChange={this.handleInput} />
                    </FormControl>

                    <FormControl >
                        <TextField style={styles.inputText}
                            id="input-complemento"
                            label="Complemento"
                            helperText="Este campo é importante!"
                            placeholder="Ponto de referência"
                            variant="outlined"
                            onChange={this.handleInput} />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="Espetinhos" products={espetinhos} getValueSection={this.getValueSection.bind(this)} />
                    <br />
                    <Section nameSection="Acompanhamentos" products={acompanhamentos} getValueSection={this.getValueSection.bind(this)} />
                    <br />
                    <Section nameSection="Cervejas" products={cevejas} getValueSection={this.getValueSection.bind(this)} />
                </Grid>

                <TotalPrice valor={this.state.sumValuesItem + this.state.sumValuesUnityItem + this.state.sumValuesUnityItemII} />

                <Grid item xs={12}>
                    <br />
                    <textarea className="inputObservacao"
                        id="input-observacao"
                        onChange={this.handleInput}
                        placeholder="Observações sobre os itens do pedido"
                        class cols="30"
                        rows="6">
                    </textarea>
                </Grid>

            </Grid>
        );
    }
}

const styles = {
    inputText: {
        margin: 5,
    },
}