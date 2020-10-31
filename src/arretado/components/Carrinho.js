import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import { Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral
import * as sectionItem from '../../redux/actions/sectionItem';


function Carrinho({ open, setOpen }) {
  
  const list = () => (
    <div
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        <ListItem alignItems="flex-start">
          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
          >
            Ali Connors
              </Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
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