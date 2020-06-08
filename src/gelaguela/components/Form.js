import React, { Component } from 'react';
import Section from './Section';
import {
    FormControl,
    TextField,
    Grid
} from '@material-ui/core';

import '../styles/Form.css';
import TotalPrice from '../../TotalPrice';


const refris = [
    {
        item: "Cajuína D'valila",
        tamanho: "600 ml",
        valor: "R$ 3.50",
    },
    {
        item: "Sukita",
        tamanho: "200 ml",
        valor: "R$ 2.00",
    },
    {
        item: "Guaraná",
        tamanho: "200 ml",
        valor: "R$ 2.00",
    },
    {
        item: "Pepsi",
        tamanho: "200 ml",
        valor: "R$ 2.00",
    },
    {
        item: "Sukita",
        tamanho: "1 Litro",
        valor: "R$ 5.00",
    },
    {
        item: "Guaraná",
        tamanho: "1 Litro",
        valor: "R$ 5.00",
    },
    {
        item: "Pepsi",
        tamanho: "1 Litro",
        valor: "R$ 5.00",
    },

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
            sumValuesItem: 0,
            sumValuesUnityItem: 0,
        };
    }


    getValueSection = (state) => {
        let { itemsOrder, subTotals, nameSection } = state;

        let sumValues = 0;
        subTotals.forEach(valor => {
            sumValues += valor;
        });

        if(nameSection === "Hamburgers"){
            this.setState({ itemsOrder: itemsOrder, sumValuesItem: sumValues },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        }else{
            this.setState({ unityItemsOrder: itemsOrder, sumValuesUnityItem: sumValues },
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
                    <Section nameSection="Refrigerantes" products={refris} getValueSection={this.getValueSection.bind(this)} />
                </Grid>

                <TotalPrice valor={this.state.sumValuesUnityItem} />

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