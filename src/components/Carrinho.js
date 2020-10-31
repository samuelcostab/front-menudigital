import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../redux/actions/sectionItem';

import "./styles/Carrinho.css";


function Carrinho({ open, setOpen, products }) {
  console.log(products.map( product => product));
  
  const list = () => (
    <div
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <h4 className="textListaItens">Lista de Itens</h4>
      <List dense>
        {products.map(product => (
          <ListItem className="listItem" key={product.akey} button>
            <ListItemText style={{textColor: '#fff'}} id={product.akey} primary={product.nameItem} />
            <ListItemText style={{textColor: '#fff'}} id={product.akey} primary={product.valueG} />
            <ListItemText id={product.akey} primary={product.qtd} />
            <ListItemText id={product.akey} primary={product.subTotal.toFixed(2)} />
            <DeleteIcon />
          </ListItem>
        )
        )}
      </List>

    </div>
  );

  return (
    <div >
      <>
        <Drawer className="carrinho" anchor={"right"} open={open} onClose={() => setOpen(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.sectionItem.products, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(sectionItem, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);