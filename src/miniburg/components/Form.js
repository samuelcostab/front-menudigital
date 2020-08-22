import React, { Component } from "react";
import Section from "../../components/Section";
import { Grid } from "@material-ui/core";

import "../styles/Form.css";
import TotalPrice from "../../components/TotalPrice";
import FormClient from "../../components/FormClient";

import { connect } from "react-redux"; //conecta ao state geral (store)

//dados para as seções
const burgues = [
  {
    item: "Atlantes",
    ingredients:
      "Abacaxi, Carne, Mussarela, Coalho, Presunto de Peru, Presunto Chester, Maionese Temperada, Cebola, Barbecue",
    valorP: 0,
    valorM: 0,
    valorG: 9.0,
  },

  {
    item: "A Moda!",
    ingredients:
      "Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 5.0,
    valorM: 7.5,
    valorG: 9.0,
  },

  {
    item: "X-EggBurg",
    ingredients:
      "Carne, Queijo, Ovo, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 3.5,
    valorM: 5.5,
    valorG: 6.5,
  },

  {
    item: "Egg-California",
    ingredients:
      "Ovo, Carne, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 4.0,
    valorM: 6.0,
    valorG: 7.0,
  },

  {
    item: "Egg-Burg",
    ingredients: "Ovo, Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 3.0,
    valorM: 4.5,
    valorG: 5.5,
  },

  {
    item: "X-Calabresa",
    ingredients:
      "Calabresa, Quejo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup",
    valorP: 3.5,
    valorM: 5.5,
    valorG: 6.5,
  },

  {
    item: "California",
    ingredients:
      "Carne, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 3.5,
    valorM: 5.5,
    valorG: 6.5,
  },

  {
    item: "Presburg",
    ingredients:
      "Presunto, Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 3.0,
    valorM: 4.5,
    valorG: 5.0,
  },

  {
    item: "Hamburger",
    ingredients: "Carne, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: 2.5,
    valorM: 3.5,
    valorG: 4.5,
  },

  {
    item: "Misto",
    ingredients:
      "Presunto, Queijo, Verduras, Maionese Temperada, Cebola, Ketchup",
    valorP: 2.5,
    valorM: 3.5,
    valorG: 4.5,
  },
];

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
  constructor(props) {
    super(props);
  }

  render() {
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormTemplate);

const styles = {
  inputText: {
    margin: 5,
    textColor: "red",
  },
};
