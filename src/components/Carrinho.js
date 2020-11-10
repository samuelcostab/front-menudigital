import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divider, Drawer } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../redux/actions/sectionItem';

import "./styles/Carrinho.css";


function Carrinho({ open, setOpen, products, total, REMOVE_PRODUCT }) {

  function handleDelete(product) {
    REMOVE_PRODUCT(product)
  }

  const list = () => (
    <Container fluid
      role="presentation"
      onKeyDown={() => setOpen(false)}
      className="text-white"
    >
      <Row>
        <Col xs={8} className="py-2">
          <h5 className="text-center">Lista de Itens </h5>
        </Col>

        <Col xs={4} className="py-2">
          <button className="btn btn-danger btn-sm" onClick={() => setOpen(false)} >Fechar</button>
        </Col>

        <Col xs={12}>
          {products.map(product => (
            <div key={product.akey}>
              <Row
                className="px-3 justify-content-between"
              >
                <span>{product.qtdG}x {product.nameItem}</span>
                <span>{product.valueG.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                <span>
                  <DeleteIcon onClick={() => handleDelete(product)} />
                </span>
              </Row>

              <Row className="px-3 text-center">
                <span>Subtotal: {product.subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </Row>

              <Divider style={styles.divider} />

            </div>
          ))}
        </Col>
      </Row>

      {total ? (
        <Row style={{ minHeight: '120px', alignItems: 'center' }} >
          <Col>
            <span>Total: {Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </Col>
        </Row>
      ) : null}
    </Container>
  );

  return (
    <div >
      <>
        <Drawer className="carrinho" anchor={"right"} open={open}>
          {/* {list()} */}
        </Drawer>
      </>
    </div>
  );
}

const styles = {
  divider: {
    marginBottom: '10px',
    marginTop: '10px'
  }
}
const mapStateToProps = state => ({ products: state.sectionItem.products, total: state.sectionItem.total });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(sectionItem, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);