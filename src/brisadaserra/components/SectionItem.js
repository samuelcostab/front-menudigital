import React, { Component } from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';

import '../styles/SectionItem.css'


export default class SectionItem extends Component {
    constructor(props) {
        super(props);

        const { item, ingredients, valorP, valorM, valorG } = this.props.item;

        this.state = {
            nameItem: item,
            ingredients: ingredients,
            valueP: valorP,
            valueM: valorM,
            valueG: valorG,
            qtdP: 0,
            qtdM: 0,
            qtdG: 0,
            subTotal: 0,
        };
    }

    handleBtnSize = (e) => {
        const id = e.target.id;

        let { qtdP, qtdM, qtdG } = this.state;

        if (id === "btn-add-P") {
            qtdP += 1;
        }

        if (id === "btn-add-M") {
            qtdM += 1;
        }

        if (id === "btn-add-G") {
            qtdG += 1;
        }

        if (id === "btn-remove-P") {
            if (qtdP > 0) {
                qtdP -= 1;
            }
        }

        if (id === "btn-remove-M") {
            if (qtdM > 0) {
                qtdM -= 1;
            }
        }

        if (id === "btn-remove-G") {
            if (qtdG > 0) {
                qtdG -= 1;
            }
        }

        this.setState({ qtdP: qtdP, qtdM: qtdM, qtdG: qtdG },
            () => {
                this.setState({ subTotal: this.calculateSubTotal() },
                    () => {
                        const state = this.state;
                        this.props.getOrderItem(state);
                    }
                );
            }
        );

    }

    renderValueQtd = (size) => {
        if (size === "P") {
            if (this.state.qtdP > 0) {
                return <Typography>{this.state.qtdP}</Typography>
            }
        }
        else if (size === "M") {
            if (this.state.qtdM > 0) {
                return <Typography>{this.state.qtdM}</Typography>
            }
        }
        else if (size === "G") {
            if (this.state.qtdG > 0) {
                return <Typography>{this.state.qtdG}</Typography>
            }
        }
    }

    renderSectionSize = (size, value) => {
        const idBtnRemoveSize = "btn-remove-" + size;
        const idBtnAddSize = "btn-add-" + size

        if (value !== "") {
            return (
                <div className="sectionSize">
                    <Typography >{size}</Typography>
                    <Typography>{value}</Typography>
                    <div className="btnsAddOrRemove">
                        <button className="btnAddOrRemove" id={idBtnRemoveSize} onClick={this.handleBtnSize} >
                            -
                    </button>
                        <button className="btnAddOrRemove" id={idBtnAddSize} onClick={this.handleBtnSize} >
                            +
                    </button>
                    </div>
                    {this.renderValueQtd(size)}
                </div>
            );
        }
    }

    calculateSubTotal = () => {
        const { valueP, valueM, valueG, qtdP, qtdM, qtdG } = this.state;

        let valP = 0;
        let valM = 0;
        let valG = 0; 
        
        if(valueP !== ""){
            valP = parseFloat(valueP.substring(2, 7));
        }
        if(valueM !== ""){
            valM = parseFloat(valueM.substring(2, 7));
        }
        if(valueG !== ""){
            valG = parseFloat(valueG.substring(2, 7));
        }

        let subTotal = (qtdP * valP) + (qtdM * valM) + (qtdG * valG);

        return subTotal;
    }

    renderSubTotalItem = () => {
        let subTotal = this.calculateSubTotal();

        if (subTotal > 0) {
            return <div className="subTotal ">
                <Typography><Box fontWeight="fontWeightBold" m={1}>SubTotal</Box></Typography>
                <Typography>R$ {subTotal.toFixed(2)}</Typography>
            </div>

        }
    }

    render() {
        return (
            <div className="container">
                <div className="nameItem">
                    <Typography variant='h6'>{this.state.nameItem}</Typography>
                    <Typography><Box fontStyle="oblique">{this.state.ingredients}</Box></Typography>
                </div>
                <div className="inputs">
                    {this.renderSectionSize("P", this.state.valueP)}
                    {this.renderSectionSize("M", this.state.valueM)}
                    {this.renderSectionSize("G", this.state.valueG)}
                </div>
                
            </div>
        );
    }
}
