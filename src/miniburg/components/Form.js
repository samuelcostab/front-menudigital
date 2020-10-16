import React, { Component } from 'react';
import Section from './Section';
import {
    FormControl,
    TextField,
    Grid,
    Typography
} from '@material-ui/core';

import '../styles/Form.css';
import TotalPrice from '../../components/TotalPrice';
import FormClient from '../../components/FormClient';

const burgues = [
    {
        item: "MINIHULK",
        ingredients: "PÃO ÁRABE, CARNE, QUEIJO, PRESUNTO, OVO, CALABRESA, FRANGO, BACON, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "", valorM: "", valorG: "R$13.00"
    },
    {
        item: "AVANTE",
        ingredients: "PÃO, CARNE, MUSSARELA, QUEIJO COALHO, PRESUNTO PERU, PRESUNTO 	CHESTER, BARBECUE, ALFACE E MOLHO MINIBURG",
        valorP: "R$7.00", valorM: "R$8.50", valorG: "R$10.00"
    },
    {
        item: "MINIMODA ",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, OVO, CALABRESA, ALFACE, CEBOLA, 	KETCHUP E MOLHO MINIBURG",
        valorP: "R$7.00", valorM: "R$9.00", valorG: "R$10.00"
    },
    {
        item: "EGUICALÍ",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO 	MINIBURG",
        valorP: "R$6.00", valorM: "R$8.00", valorG: "R$8.50"
    },
    {
        item: "AMERICANO",
        ingredients: "PÃO, CARNE, BACON, QUEIJO, ALFACE, CEBOLA, KETCHUP E MOLHO 	MINIBURG",
        valorP: "R$5.00", valorM: "R$7.00", valorG: "R$8.00"
    },
    {
        item: "BRASILIANO",
        ingredients: "PÃO, FRANGO, QUEIJO, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO 	MINIBURG",
        valorP: "R$5.00", valorM: "R$7.00", valorG: "R$8.00"
    },

    {
        item: "MINIFIT",
        ingredients: "PÃO INTEGRAL, FRANGO, OVO, QUEIJO, ALFACE, CEBOLA E MOLHO MINIBURG",
        valorP: "", valorM: "", valorG: "R$6.50"
    },

    {
        item: "CALIFÓRNIA",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$5.00", valorM: "R$7.00", valorG: "R$8.00"
    },
    {
        item: "CALABOM",
        ingredients: "PÃO, CALABRESA, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$5.00", valorM: "R$7.00", valorG: "R$8.00"
    },
    {
        item: "EGUIBÚ",
        ingredients: "PÃO, CARNE, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$4.50", valorM: "R$6.00", valorG: "R$7.00"
    },
    {
        item: "PRESBURG",
        ingredients: "PÃO, CARNE, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$4.50", valorM: "R$6.00", valorG: "R$6.50"
    },
    {
        item: "XÍSBOM",
        ingredients: "PÃO, CARNE, QUEIJO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$4.50", valorM: "R$6.00", valorG: "R$6.50"
    },
    {
        item: "SIMPRÃO",
        ingredients: "PÃO, CARNE, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$3.50", valorM: "R$4.50", valorG: "R$5.50"
    },
    {
        item: "MIX",
        ingredients: "PÃO, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP: "R$3.50", valorM: "R$4.50", valorG: "R$5.50"
    },
]

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
    {
        item: "Sukita",
        tamanho: "2 Litros",
        valor: "R$ 7.00",
    },
    {
        item: "Guaraná",
        tamanho: "2 Litros",
        valor: "R$ 7.00",
    },
    {
        item: "Pepsi",
        tamanho: "2 Litros",
        valor: "R$ 7.00",
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

        if (nameSection === "Sanduíches") {
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
                    <FormClient />
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="Sanduíches" products={burgues} getValueSection={this.getValueSection.bind(this)} />
                    <br />
                    <Section nameSection="Refrigerantes" products={refris} getValueSection={this.getValueSection.bind(this)} />

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
