import React, { Component } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Col from "react-bootstrap/Col";

import SectionItem from "./SectionItem";
import SectionUnityItem from "./SectionUnityItem";
import "./styles/Section.css";

//Tirei os dados daqui e coloquei em Form.js

export default class Section extends Component {
  constructor(props) {
    super(props);

    const { nameSection, products } = this.props;

    this.items = [3];
    this.unityItems = [3];

    this.state = {
      nameSection: nameSection,
      products: products,
      itemsOrder: [],
      subTotals: [],
    };
  }


  getOrderUnityItem = (state) => {
    const { itemsOrder, subTotals } = this.state;
    const { nameItem, qtd, tam, subTotal } = state;

    let pedido =
      "%0A*Item:* " +
      nameItem +
      "%20%20*Tamanho:* " +
      tam +
      "%20%20*qtd:* " +
      qtd;

    if (itemsOrder.length === 0) {
      itemsOrder.push(pedido);
      subTotals.push(subTotal);
    }

    if (!itemsOrder.find((item) => item.match(nameItem))) {
      itemsOrder.push(pedido);
      subTotals.push(subTotal);
    } else {
      itemsOrder.forEach((item, index) => {
        if (itemsOrder[index].match(nameItem)) {
          if (qtd === 0) {
            itemsOrder[index] = "";
            subTotals[index] = 0;
          } else {
            itemsOrder[index] = pedido;
            subTotals[index] = subTotal;
          }
        }
      });
    }

    this.setState({ itemsOrder: itemsOrder, subTotals: subTotals }, () => {
      const state = this.state;
      this.props.getValueSection(state);
    });
  };

  renderItems = () => {
    const products = this.state.products;
    let items = products.map((item, index) => {
      if (this.state.nameSection === "Sanduíches") {
        return (
          <div key={"item" + index}>
            <SectionItem
              ref={(item) => (this.items[index] = item)}
              item={item}
            />
            <Divider style={{ margin: 10 }} />
          </div>
        );
      } else {
        return (
          <div key={"item" + index}>
            <SectionUnityItem
              ref={(item) => (this.unityItems[index] = item)}
              item={item}
              getOrderUnityItem={this.getOrderUnityItem.bind(this)}
            />
            <Divider style={{ margin: 10 }} />
          </div>
        );
      }
    });

    return items;
  };

  render() {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography className="titleSection" variant="h6">
            {this.state.nameSection}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Col>{this.renderItems()}</Col>
        </AccordionDetails>
      </Accordion>
    );
  }
}
