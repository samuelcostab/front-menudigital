import React, { Component } from 'react';
import { Typography,}  from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Instagram from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './Footer.css'

export default class Footer extends Component {
 
    render() {
        return (
            <div className="footer">
                <Typography className= "texto">Copyright © Equipe MenuDe</Typography>
                <div>
                <Typography className= "texto">Contatos: 
                 <a className="texto" href="https://api.whatsapp.com/send?phone=5588996704014&text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os!"> <WhatsAppIcon /> </a>
                 <a className="texto" href="https://www.instagram.com/catalogomenude/"> <Instagram /> </a>
                 <a className="texto" href="mailto:catalogomenude@gmail.com"> <MailOutlineIcon /> </a>
                 </Typography>
                </div>
            </div>
        );
    }
}
