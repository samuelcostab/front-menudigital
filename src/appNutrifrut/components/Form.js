import React from "react";
import { Grid } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import HookForms from "../../components/HookForms";
import FormPayment from "../../components/FormPayment";
import Section from "../../components/Section";
import Carrinho from '../../components/Carrinho'

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

function FormTemplate() {

    const [open, setOpen] = React.useState(false);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h4 className="py-3 sectionTitle" >Informações do cliente</h4>
                <HookForms />
            </Grid>

            <Grid item xs={12}>
                <h4 className="py-3 sectionTitle" >Produtos</h4>
                <Section nameSection="Polpas" products={polpas} />
            </Grid>

            <Grid item xs={12}>
                <h4 className="py-3 sectionTitle" >Informações de pagamento</h4>
                <FormPayment />
            </Grid>

            <Carrinho open={open} setOpen={setOpen} />
            <TotalPrice setOpen={setOpen} />
        </Grid>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormTemplate);

