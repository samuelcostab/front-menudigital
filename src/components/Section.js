import React, { Component } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Divider,
    }from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Col from 'react-bootstrap/Col';
import SectionItem from '../components/SectionItem';
import '../styles/Section.css';


const valueItems = [
    { item: "Misto",
      ingredients:"Queijo, Verduras, Maionese Temperada, Ketchup",
      valorP: "R$2.50", valorM: "R$3.50", valorG: "R$4.50" },
    
    { item: "Hamburger",
      ingredients:"Carne, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$2.50", valorM: "R$3.50", valorG: "R$4.50" },

    { item: "Presburg",
      ingredients:"Presunto, Carne, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$3.00", valorM: "R$4.50", valorG: "R$5.00" },
    
    { item: "California",
      ingredients:"Carne, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$3.50", valorM: "R$5.50", valorG: "R$6.50" },

    { item: "Egg-California",
      ingredients:"Ovo, Carne, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$4.00", valorM: "R$6.00", valorG: "R$7.00" },
    
    { item: "Egg-Burg",
      ingredients:"Ovo, Carne, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$3.00", valorM: "R$4.50", valorG: "R$5.50" },
    
    { item: "X-EggBurg",
      ingredients:"Carne, Ovo, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$3.50", valorM: "R$5.50", valorG: "R$6.50" },

    { item: "X-Calabresa",
      ingredients:"Calabresa, Quejo, Presunto, Verduras, Maionese Temperada, Ketchup",
      valorP: "R$3.50", valorM: "R$5.50", valorG: "R$6.50" },
    
    { item: "A Moda!",
      ingredients:"Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",
      valorP: "R$5.00", valorM: "R$7.50", valorG: "R$9.00" },
]

export default class Section extends Component {
    constructor(props) {
        super(props);

        const { nameSection } = this.props;

        this.items = [3]

        this.state = {
            nameSection: nameSection,
            itemsOrder: []
        };
    }

    getSizesString = (qtdP, qtdM, qtdG) => {
        let tamanhos = " "
        if(qtdP > 0){
            tamanhos += "P -- qtd:"+qtdP+", ";
        }
        if(qtdM > 0){
            tamanhos += "M -- qtd:"+qtdM+", ";
        }
        if(qtdG > 0){
            tamanhos += "G -- qtd:"+qtdG+" ";
        }

        return tamanhos;
    }

    getOrderItem = (state) => {
        const ordersItem = this.state.itemsOrder;
        const { nameItem, qtdP, qtdM, qtdG, subTotal } = state;
        
        
        let tamanhos = this.getSizesString(qtdP,qtdM,qtdG);
        let pedido = "%20%7C%20*Item:* " + nameItem + "%20%7C%20*Tamanho:* " + tamanhos;

        if (ordersItem.length === 0) {
            ordersItem.push(pedido);
        }

        if (!ordersItem.find(item => item.match(nameItem))) {
            ordersItem.push(pedido);
        }
        else {
            ordersItem.forEach((item, index) => {
                if (ordersItem[index].match(nameItem)) {
                    if( (qtdP === 0 ) && (qtdM === 0) && (qtdG === 0) ){
                        ordersItem[index] = "";
                    }else {
                        ordersItem[index] = pedido;
                    }
                }
            });
        }

        this.setState({ itemsOrder: ordersItem },
            () => {
                const state = this.state;
                this.props.getValueSection(state)
            }
        );


    }

    renderItems = () => {
        let items = valueItems.map((item, index) => {
            return (
                <div>
                    <SectionItem ref={item => this.items[index] = item} item={item} key={'item' + index} getOrderItem={this.getOrderItem.bind(this)} />
                    <Divider style={{ margin: 10 }} />
                </div>
            );
        });

        return items;
    }

    render() {

        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" >
                    <Typography className="titleSection" variant='h6'>{this.state.nameSection}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Col>
                        {this.renderItems()}
                    </Col>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
