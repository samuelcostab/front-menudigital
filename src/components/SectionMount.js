import React, { Component } from "react";
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../redux/actions/sectionItem';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Col, Row } from "react-bootstrap";

import SectionItem from "./SectionItem";
import SectionUnityItem from "./SectionUnityItem";
import SectionUnityItemMount from "./SectionUnityItemMount";
import "./styles/Section.css";

class SectionMount extends Component {
  constructor(props) {
    super(props);

    const { nameSection, opcoes } = this.props;
    console.log(this.props);

    this.items = [3];
    this.unityItems = [3];

    this.state = {
      nameSection: nameSection,
      opcoes: opcoes,
      selected: [],
      // itemsOrder: [],
      // subTotals: [],
    };
  }

  // getSizesString = (qtdP, qtdM, qtdG) => {
  //   let tamanhos = " ";
  //   if (qtdP > 0) {
  //     tamanhos += "P -- *qtd:* " + qtdP + "  ";
  //   }
  //   if (qtdM > 0) {
  //     tamanhos += "M -- *qtd:* " + qtdM + "  ";
  //   }
  //   if (qtdG > 0) {
  //     tamanhos += "G -- *qtd:* " + qtdG + " ";
  //   }

  //   return tamanhos;
  // };


  // getOrderUnityItem = (state) => {
  //   const { itemsOrder, subTotals } = this.state;
  //   const { nameItem, qtd, tam, subTotal } = state;

  //   let pedido =
  //     "%0A*Item:* " +
  //     nameItem +
  //     "%20%20*Tamanho:* " +
  //     tam +
  //     "%20%20*qtd:* " +
  //     qtd;

  //   if (itemsOrder.length === 0) {
  //     itemsOrder.push(pedido);
  //     subTotals.push(subTotal);
  //   }

  //   if (!itemsOrder.find((item) => item.match(nameItem))) {
  //     itemsOrder.push(pedido);
  //     subTotals.push(subTotal);
  //   } else {
  //     itemsOrder.forEach((item, index) => {
  //       if (itemsOrder[index].match(nameItem)) {
  //         if (qtd === 0) {
  //           itemsOrder[index] = "";
  //           subTotals[index] = 0;
  //         } else {
  //           itemsOrder[index] = pedido;
  //           subTotals[index] = subTotal;
  //         }
  //       }
  //     });
  //   }

  //   this.setState({ itemsOrder: itemsOrder, subTotals: subTotals }, () => {
  //     const state = this.state;
  //     this.props.getValueSection(state);
  //   });
  // };

  onCheckOption = (opcao) => {
    const newState = this.state.selected.includes(opcao) ? this.state.selected.filter(value => value !== opcao) : [...this.state.selected, opcao];
    this.setState({ selected: newState });
  }

  confirmItens = () => {
    const { selected } = this.state;

    this.props.ADD_PRODUCT(selected);
  };

  renderItems = () => {
    const products = this.state.opcoes;
    let items = products.map((item, index) => {
      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <h5>{item.title}</h5>
          </div>

          {item.opcoes && item.opcoes.map((opcao, index) => 
            <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p>{opcao.item}</p>
              <FormControlLabel
                control={<Checkbox checked={this.state.selected.includes(opcao)} onChange={(e) => this.onCheckOption(opcao)} name={opcao.item} />}
                label={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(opcao.valor)}
              />
            </div>
          )}
        </div>
      );
    });

    return items;
  };

  render() {
    return (
      <div>
        {this.renderItems()}
        <Button onClick={this.confirmItens}>Confirmar</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.sectionItem.products, total: state.sectionItem.total });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(sectionItem, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(SectionMount);
// export default SectionMount;
