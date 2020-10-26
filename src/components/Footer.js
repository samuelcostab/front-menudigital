import React, { Component } from 'react';
import { Typography,}  from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Instagram from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './styles/Footer.css'

const plat = () => {
    let platForm = "";

    if (window.innerWidth > 667) {
        platForm = "web";
      } else {
        platForm = "api";
      }

      return platForm;
}


export default class Footer extends Component {

    
 
    render() {
        const platform = plat();
        return (
            <div className="footer">
                <Typography className= "texto">Copyright © Equipe MenuDe</Typography>
                <div>
                <Typography className= "texto">Afim de um Catálogo Digital pro seu negócio? Contatos: 
                 <a className="texto" target="_blank" href={`https://${platform}.whatsapp.com/send?phone=558591581164&text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seu%20Catalogo%20Digital`}> <WhatsAppIcon /> </a>
                 <a className="texto" target="_blank" href="https://www.instagram.com/catalogomenude/"> <Instagram /> </a>
                 <a className="texto" target="_blank" href="mailto:catalogomenude@gmail.com"> <MailOutlineIcon /> </a>
                 </Typography>
                </div>
            </div>
        );
    }
}
