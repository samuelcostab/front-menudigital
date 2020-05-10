import React, { Component } from 'react';
import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import {
    IconButton,
    Typography,
    Box,
} from '@material-ui/core';

import { Button } from "react-bootstrap"

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

    renderQtdP = () => {
        if (this.state.qtdP > 0) {
            return <Typography >{this.state.qtdP}</Typography>
        }
    }

    renderQtdM = () => {
        if (this.state.qtdM !== 0) {
            return <Typography>{this.state.qtdM}</Typography>
        }
    }

    renderQtdG = () => {
        if (this.state.qtdG > 0) {
            return <Typography>{this.state.qtdG}</Typography>
        }
    }

    calculateSubTotal = () => {
        const { valueP, valueM, valueG, qtdP, qtdM, qtdG } = this.state;

        let valP = parseFloat(valueP.substring(2, 7));
        let valM = parseFloat(valueM.substring(2, 7));
        let valG = parseFloat(valueG.substring(2, 7));

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
                    <div className="sectionSize">
                        <Typography >P</Typography>
                        <Typography>{this.state.valueP}</Typography>
                        <div className="btnsAddOrRemove">
                            <button className="btnAddOrRemove" id="btn-remove-P" onClick={this.handleBtnSize} >
                                -
                             </button>
                            <button className="btnAddOrRemove" id="btn-add-P" onClick={this.handleBtnSize} >
                                +
                             </button>
                        </div>
                        {this.renderQtdP()}
                    </div>

                    <div className="sectionSize">
                        <Typography >M</Typography>
                        <Typography>{this.state.valueM}</Typography>
                        <div className="btnsAddOrRemove">
                            <button className="btnAddOrRemove" id="btn-remove-M" onClick={this.handleBtnSize} >
                                -
                             </button>
                            <button className="btnAddOrRemove" id="btn-add-M" onClick={this.handleBtnSize} >
                                +
                             </button>
                        </div>
                        {this.renderQtdM()}
                    </div>

                    <div className="sectionSize">
                        <Typography >G</Typography>
                        <Typography>{this.state.valueG}</Typography>
                        <div className="btnsAddOrRemove">
                            <button className="btnAddOrRemove" id="btn-remove-G" onClick={this.handleBtnSize} >
                                -
                             </button>
                            <button className="btnAddOrRemove" id="btn-add-G" onClick={this.handleBtnSize} >
                                +
                             </button>
                        </div>
                        {this.renderQtdG()}
                    </div>
                </div>
                {this.renderSubTotalItem()}
            </div>
        );
    }
}
