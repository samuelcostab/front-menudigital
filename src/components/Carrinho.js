import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Drawer } from '@material-ui/core';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../redux/actions/sectionItem';

import "./styles/Carrinho.css";
import { ItemCarrinho } from './ItemCarrinho';


function Carrinho({ open, setOpen, products, total, REMOVE_PRODUCT }) {

  function handleDelete(product) {
    REMOVE_PRODUCT(product)
  }

  const list = () => (
    <Container fluid
      role="presentation"
      onKeyDown={() => setOpen(false)}
      className="titleOrange"
    >
      <Row>
        <Col xs={8} lg={10} className="py-3">
          <h5 className="text-center">Lista de Itens </h5>
        </Col>

        <Col xs={4} lg={2} className="py-3">
          <button className="btn btn-danger btn-sm" onClick={() => setOpen(false)} >Fechar</button>
        </Col>
        {console.log(products)}
        {products.length > 0 ? (
          <>
            {products.map(product => {
              if (product.value > 0) {
                return <Col xs={12} key={product.akey}>
                  <ItemCarrinho
                    tam={product.size}
                    qtd={product.qtd}
                    name={product.nameItem}
                    value={product.value}
                    onClick={() => handleDelete(product)}
                    subTotal={product.subTotal}
                  />
                </Col>
              } else {
                return <Col xs={12} key={product.akey}>
                  <ItemCarrinho
                    tam={product.qtdG ? "G" : ""}
                    qtd={product.qtdG}
                    name={product.nameItem}
                    value={product.valueG}
                    onClick={() => handleDelete(product)}
                    subTotal={product.subTotal}
                  />
                </Col>
              }
            })
            }
          </>
        ) : (<Col>Carrinho vazio :/</Col>)}
      </Row>

      {products.length > 0 ? (
        <Row style={{ minHeight: '120px', alignItems: 'center' }} >
          <Col>
            <span>Total: {Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </Col>
        </Row>
      ) : null}
      
    </Container >
  );

  return (
    <div >
      <>
        <Drawer className="carrinho" anchor={"right"} open={open}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.sectionItem.products, total: state.sectionItem.total });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(sectionItem, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);