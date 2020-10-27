import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import FormClient from "../../components/FormClient";
import Section from "../../components/Section";

import { connect } from "react-redux"; //conecta ao state geral (store)

const polpas = [
    {
        item: "Abacaxí",
        tamanho: "500g",
        valor: 3.0,
    },
    {
        item: "Manga",
        tamanho: "500g",
        valor: 2.50,
    },
    {
        item: "Goiaba",
        tamanho: "500g",
        valor: 2.50,
    },
    {
        item: "Acerola",
        tamanho: "500g",
        valor: 2.5,
    },
    {
        item: "Tamarindo",
        tamanho: "500g",
        valor: 2.5,
    },
    {
        item: "Cajá",
        tamanho: "500g",
        valor: 5.0,
    },
    {
        item: "Cajá Umbú",
        tamanho: "500g",
        valor: 3.5,
    },
    {
        item: "Graviola",
        tamanho: "500g",
        valor: 5.0,
    },
    {
        item: "Macarujá",
        tamanho: "500g",
        valor: 6.0,
    },
    {
        item: "Cajú",
        tamanho: "500g",
        valor: 2.5,
    },
    {
        item: "Abacaxí c/ Hortelã",
        tamanho: "500g",
        valor: 3.5
    }

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
                    <Section nameSection="Polpas" products={polpas} />
                </Grid>

                <TotalPrice />
            </Grid>
        );
    }

}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormTemplate);

const styles = {
    inputText: {
        margin: 5,
        textColor: "red",
    },
};
