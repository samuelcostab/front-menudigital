import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


import "./styles/Carrinho.css";

export const ItemCarrinho = ({ qtd, name, value, onClick, subTotal }) => {
  
  return (
    <div key={name}>
      <Row
        className="px-3 justify-content-between"
      >
        <Col xs={7} ><span>{qtd}x {name}</span></Col>
        <Col xs={3} >
          <span className="text-center">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </Col>
        <Col xs={2} >
          <span>
            <DeleteIcon onClick={onClick} />
          </span>
        </Col>
      </Row>

      <Row className="px-3 text-center">
        <span><b>Subtotal:</b> {subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
      </Row>

      <Divider style={styles.divider} />

    </div>
  )
}

const styles = {
  divider: {
    marginBottom: '10px',
    marginTop: '10px'
  }
}
