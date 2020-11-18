import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Drawer } from '@material-ui/core';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as shopingCart from '../redux/actions/shopingCartActions';
import * as sectionItem from '../redux/actions/sectionItem';

import "./styles/Carrinho.css";
import { ItemCarrinho } from './ItemCarrinho';


function Carrinho({ open, setOpen, products, total, REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_CART }) {

  function handleDelete(product) {
    REMOVE_PRODUCT_FROM_CART(product);
    REMOVE_PRODUCT_CART(product);
  }

  const list = () => (
    <Container fluid
      role="presentation"
      onKeyDown={() => setOpen(false)}
      className="titleOrange">
      <Row>
        <Col xs={8} lg={10} className="py-3">
          <h5 className="text-center">Lista de Itens </h5>
        </Col>

        <Col xs={4} lg={2} className="py-3">
          <button className="btn btn-danger btn-sm" onClick={() => setOpen(false)} >Fechar</button>
        </Col>

        {products.length > 0 ? (
          <>
            {
              products.map(product => {
                return <Col xs={12} key={product.nameItem}>
                  <ItemCarrinho
                    name={product.nameItem}
                    qtd={product.qtd}
                    subTotal={product.subTotal}
                    value={product.value}
                    onClick={() => handleDelete(product)}
                  />
                </Col>
              })
            }
          </>
        ) : (<Col><b>Carrinho vazio :/ </b></Col>)
        }

      </Row>

      {products.length > 0 ? (
        <Row style={{ minHeight: '120px', alignItems: 'center' }} >
          <Col>
            <span><b>Total:</b> {Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </Col>
        </Row>
      ) : null}

    </Container>
  );

  return (
    <div >
      <>
        <Drawer className="carrinho" anchor={"right"} open={open}>
          { list()}
        </Drawer>
      </>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.shopingCart.products_cart, total: state.sectionItem.total });//repassar State para as props

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, sectionItem, shopingCart), dispatch) //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);