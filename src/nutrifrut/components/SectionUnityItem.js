import React, { Component } from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';



import '../styles/SectionItem.css'


export default class SectionUnityItem extends Component {
    constructor(props) {
        super(props);

        const { item, tamanho, valor} = this.props.item;

        this.state = {
            nameItem: item,
            tam: tamanho,
            value: valor,
            qtd: 0,
            subTotal: 0,
        };
    }


    handleBtnSize = (e) => {
        const id = e.target.id;

        let { qtd } = this.state;

        if (id === "btn-add") {
            qtd += 1;
        }


        if (id === "btn-remove") {
            if (qtd > 0) {
                qtd -= 1;
            }
        }

        this.setState({ qtd: qtd},
            () => {
                this.setState({ subTotal: this.calculateSubTotal() },
                    () => {
                        const state = this.state;
                        this.props.getOrderUnityItem(state);
                    }
                );
            }
        );

    }

    renderValueQtd = () => {
        if (this.state.qtd > 0) {
            return <Typography >{this.state.qtd}</Typography>
        }
    }

    calculateSubTotal = () => {
        const { value, qtd} = this.state;

        let val = parseFloat(value.substring(2, 7));

        let subTotal = (qtd * val);

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

    renderSectionSize = (value) => {
        const idBtnRemoveSize = "btn-remove";
        const idBtnAddSize = "btn-add";

        if (value !== "") {
            return (
                <div className="sectionSize">
                    <Typography>{value}</Typography>
                    <div className="btnsAddOrRemove">
                        <button className="btnAddOrRemove" id={idBtnRemoveSize} onClick={this.handleBtnSize} >
                            -
                    </button>
                        <button className="btnAddOrRemove" id={idBtnAddSize} onClick={this.handleBtnSize} >
                            +
                    </button>
                    </div>
                    {this.renderValueQtd()}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="nameItem">
                    <Typography variant='h6'>{this.state.nameItem}</Typography>
                    <Typography><Box fontStyle="oblique">{this.state.tam}</Box></Typography>
                </div>
                <div className="inputs">
                    {this.renderSectionSize(this.state.value)}
                </div>

            </div>
        );
    }
}
