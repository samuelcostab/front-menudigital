import React, { Component } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import "./styles/SectionItem.css";

export default class SectionUnityItemMount extends Component {
  constructor(props) {
    super(props);

    // const { item, tamanho, valor } = this.props.item;
    const { title, opcoes } = this.props.item;

    this.state = {
      title: title,
      opcoes: opcoes,
      selected: [],
      // nameItem: item,
      // tam: tamanho,
      // value: valor,
      // qtd: 0,
      // subTotal: 0,
    };
  }

  onCheckOption = (opcao) => {
    const newState = this.state.selected.includes(opcao) ? this.state.selected.filter(value => value !== opcao) : [...this.state.selected, opcao];
    console.log(newState);
    this.setState({ selected: newState });
  }

  render() {
    return (
      <div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <h5>{this.state.title}</h5>
          </div>

          {this.state.opcoes && this.state.opcoes.map((opcao, index) => 
            <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p>{opcao.item}</p>
              <FormControlLabel
                control={<Checkbox checked={this.state.selected.includes(opcao)} onChange={(e) => this.onCheckOption(opcao)} name={opcao.item} />}
                label={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(opcao.valor)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
