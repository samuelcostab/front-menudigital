import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../../redux/actions/sectionItem';


function Carrinho({ open, setOpen, products }) {

  const list = () => (
    <div
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List dense>
        {products.map(product => (
          <ListItem key={product.akey} button>
            <ListItemText id={product.akey} primary={product.nameItem} />
          </ListItem>
        )
        )}
      </List>

    </div>
  );

  return (
    <div>
      <>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.sectionItem.products, });//repassar State para as props

const mapDispatchToProps = dispatch => bindActionCreators(sectionItem, dispatch); //repassar Actions para as props

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);