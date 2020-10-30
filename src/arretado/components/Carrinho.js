import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, ListItemAvatar, Typography } from '@material-ui/core';


export default function Carrinho({ open, setOpen }) {

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