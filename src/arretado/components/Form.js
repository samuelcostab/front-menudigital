import React from 'react';
import { Grid } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import HookForms from "../../components/HookForms";
import FormPayment from "../../components/FormPayment";
import Section from "../../components/Section";
import Carrinho from '../../components/Carrinho'

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
                <Section nameSection="HAMBÚRGUERES" products={burgues} />
                <br />
                <Section nameSection="REFRIGERANTES" products={refris} />
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