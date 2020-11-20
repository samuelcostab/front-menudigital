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
        valorP: 0, valorM: 0, valorG: 16.00
    },
    {
        item: "PORRETA BURGER",
        ingredients: "Pão de Batata, Hamburguer de Frango com requeijão, Salada refolgada de repolho, Cenoura, Couve Manteiga, Milho e Molho Branco",
        valorP: 0, valorM: 0, valorG: 12.00
    },
]

const refris = [
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
        item: "Soda",
        tamanho: "200 ml",
        valor: 2.0,
    },
    {
        item: "Pepsi",
        tamanho: "200 ml",
        valor: 2.0,
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
                    <br />
                    <Section nameSection="REFRIGERANTES" products={refris} />
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
