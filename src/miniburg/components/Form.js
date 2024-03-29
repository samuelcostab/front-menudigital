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
        item: "MINIHULK",
        ingredients: "PÃO ÁRABE, CARNE, QUEIJO, PRESUNTO, OVO, CALABRESA, FRANGO, BACON, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:0, valorM:0, valorG:14.00
    },
    {
        item: "AVANTE",
        ingredients: "PÃO, CARNE, MUSSARELA, QUEIJO COALHO, PRESUNTO PERU, PRESUNTO CHESTER, BARBECUE, ALFACE E MOLHO MINIBURG",
        valorP:7.50, valorM:9.50, valorG:11.00
    },
    {
        item: "MINIMODA ",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, OVO, CALABRESA, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:7.50, valorM:10.00, valorG:11.00
    },
    {
        item: "EGUICALÍ",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:6.50, valorM:9.00, valorG:9.50
    },
    {
        item: "AMERICANO",
        ingredients: "PÃO, CARNE, BACON, QUEIJO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.50, valorM:8.00, valorG:9.00
    },
    {
        item: "BRASILIANO",
        ingredients: "PÃO, FRANGO, QUEIJO, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.50, valorM:8.00, valorG:9.00
    },
    {
        item: "MINIFIT",
        ingredients: "PÃO INTEGRAL, FRANGO, OVO, QUEIJO, ALFACE, CEBOLA E MOLHO MINIBURG",
        valorP:0, valorM: 7.50, valorG:0,
    },

    {
        item: "CALIFÓRNIA",
        ingredients: "PÃO, CARNE, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.50, valorM:8.00, valorG:9.00
    },
    {
        item: "CALABOM",
        ingredients: "PÃO, CALABRESA, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.50, valorM:8.00, valorG:9.00
    },
    {
        item: "EGUIBÚ",
        ingredients: "PÃO, CARNE, OVO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.00, valorM:7.00, valorG:8.00
    },
    {
        item: "PRESBURG",
        ingredients: "PÃO, CARNE, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.00, valorM:7.00, valorG:7.50
    },
    {
        item: "XÍSBOM",
        ingredients: "PÃO, CARNE, QUEIJO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:5.00, valorM:7.00, valorG:7.50
    },
    {
        item: "SIMPRÃO",
        ingredients: "PÃO, CARNE, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:4.00, valorM:5.50, valorG:6.50
    },
    {
        item: "MIX",
        ingredients: "PÃO, QUEIJO, PRESUNTO, ALFACE, CEBOLA, KETCHUP E MOLHO MINIBURG",
        valorP:4.00, valorM:5.50, valorG:6.50
    },
]

const refris = [
    {
        item: "Cajuína D'valila",
        tamanho: "600 ml",
        valor: 4.50,
    },
    {
        item: "Coca Cola",
        tamanho: "300 ml",
        valor: 4.00,
    },
    {
        item: "Sukita",
        tamanho: "200 ml",
        valor: 3.00,
    },
    {
        item: "Guaraná",
        tamanho: "200 ml",
        valor: 3.00,
    },
    {
        item: "Pepsi",
        tamanho: "200 ml",
        valor: 3.00,
    },
    {
        item: "Sukita",
        tamanho: "1 Litro",
        valor: 6.00,
    },
    {
        item: "Coca Cola",
        tamanho: "600 ml",
        valor: 5.00,
    },
    {
        item: "Guaraná",
        tamanho: "1 Litro",
        valor: 6.00,
    },
    {
        item: "Pepsi",
        tamanho: "1 Litro",
        valor: 6.00,
    },
    {
        item: "Sukita",
        tamanho: "2 Litros",
        valor: 8.00,
    },
    {
        item: "Coca Cola",
        tamanho: "2 Litros",
        valor: 9.00,
    },
    {
        item: "Guaraná",
        tamanho: "2 Litros",
        valor: 8.00,
    },
    {
        item: "Pepsi",
        tamanho: "2 Litros",
        valor: 8.00,
    },
]

const vitaminas = [
    {
        item: "Maracujá",
        tamanho: "(Vitamina)",
        valor: 4.00,
    },
    {
        item: "Cajá Umbu",
        tamanho: "(Vitamina)",
        valor: 4.00,
    },
    {
        item: "Manga",
        tamanho: "(Vitamina)",
        valor: 3.50,
    },
    {
        item: "Goiaba",
        tamanho: "(Vitamina)",
        valor: 3.50,
    },
    {
        item: "Acerola",
        tamanho: "(Vitamina)",
        valor: 3.50,
    }
]

const sucos = [
    {
        item: "Maracujá",
        tamanho: "(Suco)",
        valor: 3.00,
    },
    {
        item: "Cajá Umbu",
        tamanho: "(Suco)",
        valor: 3.00,
    },
    {
        item: "Manga",
        tamanho: "(Suco)",
        valor: 2.50,
    },
    {
        item: "Goiaba",
        tamanho: "(Suco)",
        valor: 2.50,
    },
    {
        item: "Acerola",
        tamanho: "(Suco)",
        valor: 2.50,
    }
]

// Componente responsável pelo formulário do cliente e as seções do catálogo
class FormTemplate extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormClient />
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="Sanduíches" products={burgues} />
                    <br />
                    <Section nameSection="Refrigerantes" products={refris} />
                    <br />
                    <Section nameSection="Vitaminas" products={vitaminas} />
                    <br />
                    <Section nameSection="Sucos" products={sucos} />
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
