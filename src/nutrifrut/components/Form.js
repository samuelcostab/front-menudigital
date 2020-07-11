 import React, { Component } from 'react';
import Section from './Section';
import {
    FormControl,
    TextField,
    Grid
} from '@material-ui/core';

import '../styles/Form.css';
import TotalPrice from '../../components/TotalPrice';
import FormClient from '../../components/FormClient';

const polpas = [
    {
        item: "Abacaxí",
        tamanho: "",
        valor: "R$ 3.00",
    },
    {
        item: "Manga",
        tamanho: "",
        valor: "R$ 2.50",
    },
    {
        item: "Goiaba",
        tamanho: "",
        valor: "R$ 2.50",
    },
    {
        item: "Acerola",
        tamanho: "",
        valor: "R$ 2.50",
    },
    {
        item: "Tamarindo",
        tamanho: "",
        valor: "R$ 2.50",
    },
    {
        item: "Cajá",
        tamanho: "",
        valor: "R$ 5.00",
    },
    {
        item: "Cajá Umbú",
        tamanho: "",
        valor: "R$ 3.50",
    },
    {
        item: "Graviola",
        tamanho: "",
        valor: "R$ 5.00",
    },
    {
        item: "Macarujá",
        tamanho: "",
        valor: "R$ 6.00",
    },
    {
        item: "Cajú",
        tamanho: "",
        valor: "R$ 2.50",
    },
    {
        item: "Abacaxí c/ Hortelã",
        tamanho: "",
        valor: "R$ 3.50"
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

        if (nameSection === "Hamburgers") {
            this.setState({ itemsOrder: itemsOrder, sumValuesItem: sumValues },
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        } else {
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
        let valor = this.state.sumValuesUnityItem + this.state.sumValuesItem;
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="logoEmpresa">
                        <h1>NutriFrut</h1>
                        <h6>Polpas de frutas 100% natural</h6>
                    </div>
                </Grid>

                <Grid item xs={12}>
                   <FormClient />
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="Polpas" products={polpas} getValueSection={this.getValueSection.bind(this)} />

                </Grid>

                <TotalPrice valor={valor} />

                <Grid item xs={12}>
                    <textarea
                        id="input-observacao"
                        onChange={this.handleInput}
                        placeholder="Observações sobre os itens do pedido"
                        class cols="30"
                        rows="5">
                    </textarea>
                </Grid>

            </Grid>
        );
    }
}

const styles = {
    inputText: {
        margin: 5,
        textColor: "red",
    },
}