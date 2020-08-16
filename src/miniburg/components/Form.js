import React, { Component } from 'react';
import Section from './Section';
import {
    Grid,
} from '@material-ui/core';

import '../styles/Form.css';
import TotalPrice from '../../components/TotalPrice';
import FormClient from '../../components/FormClient';

import { connect } from 'react-redux';//conecta ao state geral (store)

//dados para as seções
const burgues = [
    {
        item: "Atlantes",
        ingredients: "Abacaxi, Carne, Mussarela, Coalho, Presunto de Peru, Presunto Chester, Maionese Temperada, Cebola, Barbecue",
        valorP:0 , valorM:0 , valorG: 9.00
    },

    {
        item: "A Moda!",
        ingredients: "Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 5.00, valorM: 7.50, valorG: 9.00
    },

    {
        item: "X-EggBurg",
        ingredients: "Carne, Queijo, Ovo, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 3.50, valorM: 5.50, valorG: 6.50
    },

    {
        item: "Egg-California",
        ingredients: "Ovo, Carne, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 4.00, valorM: 6.00, valorG: 7.00
    },

    {
        item: "Egg-Burg",
        ingredients: "Ovo, Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 3.00, valorM: 4.50, valorG: 5.50
    },

    {
        item: "X-Calabresa",
        ingredients: "Calabresa, Quejo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup",
        valorP: 3.50, valorM: 5.50, valorG: 6.50
    },

    {
        item: "California",
        ingredients: "Carne, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 3.50, valorM: 5.50, valorG: 6.50
    },

    {
        item: "Presburg",
        ingredients: "Presunto, Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 3.00, valorM: 4.50, valorG: 5.00
    },

    {
        item: "Hamburger",
        ingredients: "Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
        valorP: 2.50, valorM: 3.50, valorG: 4.50
    },

    {
        item: "Misto",
        ingredients: "Presunto, Queijo, Verduras, Maionese Temperada, Cebola, Ketchup",
        valorP: 2.50, valorM: 3.50, valorG: 4.50
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


// Componente responsável pelo formulário do cliente e as seções do catálogo
class FormTemplate extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <FormClient />
                </Grid>

                <Grid item xs={12}>
                    <Section nameSection="Hamburgers" products={burgues} />
                    <br />
                    <Section nameSection="Refrigerantes" products={refris} />
                </Grid>
               
                <TotalPrice />

            </Grid>
        );
    }
}

const mapStateToProps = state => ({
   
});


export default connect(mapStateToProps)(FormTemplate);

const styles = {
    inputText: {
        margin: 5,
        textColor: "red",
    },
}