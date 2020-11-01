import React from 'react';
import { Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


import "./styles/Carrinho.css";

export const ItemCarrinho = ({key, qtd, name, value, onClick, subTotal}) => {
  return (
    <div key={key}>
      <Row
        className="px-3 justify-content-between"
      >
        <span>{qtd}x {name}</span>
        <span>{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        <span>
          <DeleteIcon onClick={onClick} />
        </span>
      </Row>

      <Row className="px-3 text-center">
        <span>Subtotal: {subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
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
