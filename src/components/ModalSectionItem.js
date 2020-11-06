import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

import SectionItemDatails from "./SectionItemDetails";

import { connect } from "react-redux"; //conecta ao state geral (store)
import { bindActionCreators } from "redux"; //conecta as actions criadas
import * as sectionItem from "../redux/actions/sectionItem";
import * as shopingCart from "../redux/actions/shopingCartActions";

import "./styles/Modal.css";

class ModalSectionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      order: {},
      items: [],
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  
  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  confirmItens = () => {
    const { order, items } = this.state;

    if (order.hasOwnProperty('akey')) {
      //só permite add//rmv se tiver um akey. Caso contrario é um obj vazio
      //action para adicionar os items
      if (order.qtdG < 1 && order.qtdM < 1 && order.qtdP < 1 && order.qtd < 1) {
        this.props.REMOVE_PRODUCT(order);
        this.props.ADD_PRODUCT_CART(items);
        //this.props.REMOVE_PRODUCT_CART(items);
      } else {
        this.props.ADD_PRODUCT(order);
        this.props.ADD_PRODUCT_CART(items);
      }
    }
    this.handleClose();
  };

  convertDataToItemsCart = (data) => {
    let itemsCart = [];
    const {nameItem, qtd, qtdG, qtdM, qtdP, valueG, valueM, valueP, value, size} = data;
    if(qtd >= 0 && size){
      itemsCart.push({
        nameItem: nameItem + ` ${size}`,
        value: value,
        qtd: qtd,
        subTotal: (value * qtd)
      })
    }

    if(qtdG >= 0 && !size){
      itemsCart.push({
        nameItem: nameItem + " G",
        value: valueG,
        qtd: qtdG,
        subTotal: (valueG * qtdG)
      })
    }

    if(qtdM >= 0 && !size){
      itemsCart.push({
        nameItem: nameItem + " M",
        value: valueM,
        qtd: qtdM,
        subTotal: (valueM * qtdM)
      })
    }

    if(qtdP >= 0 && !size){
      itemsCart.push({
        nameItem: nameItem + " P",
        value: valueP,
        qtd: qtdP,
        subTotal: (valueP * qtdP)
      })
    }


    return itemsCart;
  }

  getDataItems = (state) => {
    const dadosSectionItem = state;
    const items = this.convertDataToItemsCart(state);

    this.setState({ order: dadosSectionItem, items: items }, () => {});
  };

  render() {
    return (
      <div>
        <Button className="btn-Confirmar" onClick={this.handleModal}>
           Selecionar
        </Button>

        <Modal show={this.state.isOpen} onHide={this.handleClose}>
          <button className="btn-CloseModal" onClick={this.handleClose}>
            <span style={{ fontSize: 24}}>Fechar </span>
          </button>
          <Modal.Body>
            <SectionItemDatails
              item={this.props.item}
              key={"item" + 1}
              getDataItems={this.getDataItems.bind(this)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-Confirmar" onClick={this.confirmItens}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.sectionItem.products,
  products_cart: state.shopingCart.products_cart,
});

const mapActionsToProps = (actions) =>
  bindActionCreators(Object.assign({}, sectionItem, shopingCart), actions); //repassar Actions para as props deste Component

export default connect(mapStateToProps, mapActionsToProps)(ModalSectionItem);
