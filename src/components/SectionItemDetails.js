/// < reference type=react
import React, { Component } from "react";
import { Typography, Box, Divider } from "@material-ui/core";

import "./styles/SectionItemII.css";

import { bindActionCreators } from "redux"; //conecta as actions criadas
import { connect } from "react-redux"; //conecta ao state geral (store)
import * as sectionItemActions from "../redux/actions/sectionItem";

class SectionItemDatails extends Component {
  constructor(props) {
    super(props);

    const {
      item,
      ingredients,
      valor,
      tamanho,
      valorP,
      valorM,
      valorG,
    } = this.props.item;

    const akey = tamanho ? `${item} ${tamanho}`: `${item}`;

    this.state = {
      akey: akey,
      nameItem: item,
      ingredients: ingredients,
      value: valor,
      size: tamanho,
      valueP: valorP,
      valueM: valorM,
      valueG: valorG,
      qtd: 0,
      qtdP: 0,
      qtdM: 0,
      qtdG: 0,
      subTotal: 0,
      observation: "",
    };
  }

  componentWillMount() {
    this.loadDataItem();
  }

  loadDataItem = () => {//pega os dados do stateGeral e busca os dados do item para renderizar no modal
    if (this.props.products) {
      const index = this.props.products.findIndex(
        (el) => el.akey === this.state.akey
      );

      if (index !== -1) {
        const productUpdate = this.props.products[index];
        this.setState(productUpdate);
      }
    }
  };

  handleBtnSize = (e) => {
    const id = e.target.id;

    let { qtd, qtdP, qtdM, qtdG } = this.state;

    if (id === "btn-add") {
      qtd += 1;
    }

    if (id === "btn-remove") {
      if (qtd > 0) {
        qtd -= 1;
      }
    }

    if (id === "btn-add-P") {
      qtdP += 1;
    }

    if (id === "btn-add-M") {
      qtdM += 1;
    }

    if (id === "btn-add-G") {
      qtdG += 1;
    }

    if (id === "btn-remove-P") {
      if (qtdP > 0) {
        qtdP -= 1;
      }
    }

    if (id === "btn-remove-M") {
      if (qtdM > 0) {
        qtdM -= 1;
      }
    }

    if (id === "btn-remove-G") {
      if (qtdG > 0) {
        qtdG -= 1;
      }
    }

    this.setState({ qtd, qtdP, qtdM, qtdG }, () => {
      this.setState({ subTotal: this.calculateSubTotal() }, () => {
        const state = this.state;
        this.props.getDataItems(state);
      });
    });
  };

  handleInput = (e) => {
    if (e.target.id === "input-observacao") {
      this.setState({ observation: e.target.value }, () => {
        const state = this.state;
        this.props.getDataItems(state);
      });
    }
  };

  calculateSubTotal = () => {
    const { value, valueP, valueM, valueG, qtd, qtdP, qtdM, qtdG } = this.state;

    let subTotal = 0;

    if (value) {
      subTotal += value * qtd;
    } else if (valueP || valueM || valueG) {
      subTotal =
        qtdP * valueP.toFixed(2) +
        qtdM * valueM.toFixed(2) +
        qtdG * valueG.toFixed(2);
    }

    return subTotal;
  };


  toggleRenderItem = () => {
    if (this.state.value || this.state.size) {
      return (
        <div className="sectionItemContainer">
          <div className="headerSectionItem">
            <Typography variant="h4">{this.state.nameItem}</Typography>
          </div>

          <div className="inputsSectionItem">
            {() => {console.log(this.state.size); if(this.state.size !== "" ){ return <Typography className="title-Tamanhos">Tamanho</Typography>}} }
            {this.renderSizeOptions(this.state.size, this.state.value)}
          </div>
        </div>
      );
    }
    if (this.state.valueG || this.state.valueM || this.state.valueP) {
      return (
        <div className="sectionItemContainer">
          <div className="headerSectionItem">
            <Typography variant="h4">{this.state.nameItem}</Typography>
            <Typography>
              <Box className="description" fontStyle="oblique">
                {this.state.ingredients}
              </Box>
            </Typography>
            <Divider style={{ margin: 5 }} />
          </div>

          <div className="inputsSectionItem">
            <Typography className="title-Tamanhos">Tamanhos</Typography>
            {this.renderSizeOptions("P", this.state.valueP)}
            {this.renderSizeOptions("M", this.state.valueM)}
            {this.renderSizeOptions("G", this.state.valueG)}
          </div>
          <textarea
            id="input-observacao"
            onChange={this.handleInput}
            placeholder="Observações sobre os itens do pedido"
            class
            cols="30"
            rows="5"
          ></textarea>
        </div>
      );
    }
  };

  renderQtdSelected = (size) => {
    if (size === "P") {
      return <Typography>{this.state.qtdP}</Typography>;
    } else if (size === "M") {
      return <Typography>{this.state.qtdM}</Typography>;
    } else if (size === "G") {
      return <Typography>{this.state.qtdG}</Typography>;
    } else {
      return <Typography>{this.state.qtd}</Typography>;
    }
  };

  renderSizeOptions = (size, value) => {
    const idBtnRemoveSize =
      size === "P" || size === "M" || size === "G"
        ? "btn-remove-" + size
        : "btn-remove";
    const idBtnAddSize =
      size === "P" || size === "M" || size === "G"
        ? "btn-add-" + size
        : "btn-add";

    if (value > 0) {
      return (
        <div className="tamSectionItem">
          <Typography>{size}</Typography>
          <Typography className="valueQtd">R${value.toFixed(2)}</Typography>
          <div className="btnsAddOrRemove">
            <button
              className="btnAddOrRemove"
              id={idBtnRemoveSize}
              onClick={this.handleBtnSize}
            >
              -
            </button>

            {this.renderQtdSelected(size)}

            <button
              className="btnAddOrRemove"
              id={idBtnAddSize}
              onClick={this.handleBtnSize}
            >
              +
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.toggleRenderItem()}</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.sectionItem.products,
});

const mapDispatchToProps = (actions) =>
  bindActionCreators(sectionItemActions, actions); //repassar Actions para as props deste Component

export default connect(mapStateToProps, mapDispatchToProps)(SectionItemDatails);
