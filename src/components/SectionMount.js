import React, { Component } from "react";
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../redux/actions/sectionItem';
import {
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Button} from "react-bootstrap";

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
