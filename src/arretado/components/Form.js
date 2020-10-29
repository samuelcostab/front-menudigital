import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import FormClient from "../../components/FormClient";
import FormPayment from "../../components/FormPayment";
import Section from "../../components/Section";

import { connect } from "react-redux"; //conecta ao state geral (store)

const burgues = [
    {
        item: "ARRETADO BURGER",
        ingredients: "Pão de Batata, Carne de sol, Molho Barbecue, Queijo Coalho, Macaxeira Frita, Melaço de Cana",
        valorP: 0, valorM: 0, valorG: 17.00
    },
    {
        item: "ESTRIBADO BURGER",
        ingredients: "Pão de Batata, Blend 120g, Molho de Queijo, Bacon e Nachos",
        valorP: 0, valorM: 0, valorG: 16.50
    },
    {
        item: "ARROCHADO BURGER",
        ingredients: "Pão de Batata, Linguiça Toscana Empanada, Queijo Prato, Vinagrete, Molho Barbecue",
        valorP: 0, valorM: 0, valorG: 13.00
    },
    {
        item: "PORRETA BURGER",
        ingredients: "Pão de Batata, Hamburguer de Frango com requeijão, Salada refolgada de repolho, Cenoura, Couve Manteiga, Milho e Molho Branco",
        valorP: 0, valorM: 0, valorG: 12.00
    },
]

const refris = [
    {
        item: "Cajuína D'valila",
        tamanho: "600 ml",
        valor: 3.5,
    },
    {
        item: "Sukita",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Guaraná",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Pepsi",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Sukita",
        tamanho: "1 Litro",
        valor: 5.0,
    },
    {
        item: "Guaraná",
        tamanho: "1 Litro",
        valor: 5.0,
    },
    {
        item: "Pepsi",
        tamanho: "1 Litro",
        valor: 5.0,
    },
    {
        item: "Sukita",
        tamanho: "2 Litros",
        valor: 7.0,
    },
    {
        item: "Guaraná",
        tamanho: "2 Litros",
        valor: 7.0,
    },
    {
        item: "Pepsi",
        tamanho: "2 Litros",
        valor: 7.0,
    },
];

// Componente responsável pelo formulário do cliente e as seções do catálogo
class FormTemplate extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormClient />
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="HAMBÚRGUERES" products={burgues} />
                </Grid>
                <Grid item xs={12}>
                    <FormPayment />
                </Grid>
                    
                <TotalPrice />
            </Grid>
        );
    }

}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormTemplate);
