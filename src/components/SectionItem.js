import React, { Component } from "react";
import { Typography} from "@material-ui/core";

import "./styles/SectionItem.css";
import ModalSectionItem from "./ModalSectionItem";

export default class SectionItem extends Component {
  constructor(props) {
    super(props);

    const { item, ingredients, valorP, valorM, valorG } = this.props.item;

    this.state = {
      nameItem: item,
      ingredients: ingredients,
      valueP: valorP,
      valueM: valorM,
      valueG: valorG,
      qtdP: 0,
      qtdM: 0,
      qtdG: 0,
      subTotal: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="nameItem">
          <Typography variant="h6">{this.state.nameItem}</Typography>
          <Typography>
            <Typography style={{fontStyle: 'italic'}}>{this.state.ingredients}</Typography>
          </Typography>
        </div>
        <div className="inputs">
          <ModalSectionItem item={this.props.item} />
        </div>
      </div>
    );
  }
}
