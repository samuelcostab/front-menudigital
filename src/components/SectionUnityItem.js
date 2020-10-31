import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import "./styles/SectionItem.css";
import ModalSectionItem from "./ModalSectionItem";

export default class SectionUnityItem extends Component {
  constructor(props) {
    super(props);

    const { item, tamanho, valor } = this.props.item;

    this.state = {
      nameItem: item,
      tam: tamanho,
      value: valor,
      qtd: 0,
      subTotal: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="nameItem">
          <Typography variant="h6">{this.state.nameItem}</Typography>
          <Typography style={{fontStyle: 'italic'}}>
            {this.state.tam}
          </Typography>
        </div>
        <div className="inputs">
          <ModalSectionItem item={this.props.item} />
        </div>
      </div>
    );
  }
}
