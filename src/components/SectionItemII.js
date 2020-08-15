/// < reference type=react
import React, { Component } from 'react';
import {
    Typography,
    Box,
    Divider,
} from '@material-ui/core';

import './styles/SectionItemII.css'

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral (store)
import * as sectionItemActions from '../redux/actions/sectionItem';

class SectionItemII extends Component {
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


    componentWillMount(){
        this.loadDataItem();
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
                        this.props.getDataItems(state);
                    }
                );
            }
        );

    }

    renderValueQtd = (size) => {
        if (size === "P") {
            return <Typography>{this.state.qtdP}</Typography>
        }
        else if (size === "M") {
            return <Typography>{this.state.qtdM}</Typography>
        }
        else if (size === "G") {
            return <Typography>{this.state.qtdG}</Typography>
        }
    }

    renderTam = (size, value) => {
        const idBtnRemoveSize = "btn-remove-" + size;
        const idBtnAddSize = "btn-add-" + size

        if (value !== "") {
            return (
                <div className="tamSectionItem">
                    <Typography >{size}</Typography>
                    <Typography className="valueQtd">{value}</Typography>
                    <div className="btnsAddOrRemove">
                        <button className="btnAddOrRemove" id={idBtnRemoveSize} onClick={this.handleBtnSize} >
                            -
                    </button>

                        {this.renderValueQtd(size)}

                        <button className="btnAddOrRemove" id={idBtnAddSize} onClick={this.handleBtnSize} >
                            +
                    </button>
                    </div>
                </div>
            );
        }
    }

    calculateSubTotal = () => {
        const { valueP, valueM, valueG, qtdP, qtdM, qtdG } = this.state;

        let valP = 0;
        let valM = 0;
        let valG = 0;

        if (valueP !== "") {
            valP = parseFloat(valueP.substring(2, 7));
        }
        if (valueM !== "") {
            valM = parseFloat(valueM.substring(2, 7));
        }
        if (valueG !== "") {
            valG = parseFloat(valueG.substring(2, 7));
        }

        let subTotal = (qtdP * valP) + (qtdM * valM) + (qtdG * valG);

        return subTotal;
    }

    loadDataItem = () => {
        
        if (this.props.products) {
            const index = this.props.products.findIndex(el => el.nameItem === this.state.nameItem);

            if (index !== -1) {
                const productUpdate = this.props.products[index]
                this.setState(productUpdate);
            }
        }
    }

    render() {

        return (
            <div className="sectionItemContainer">
                <div className="headerSectionItem">
                    <Typography variant='h4'>{this.state.nameItem}</Typography>
                    <Typography><Box className="description" fontStyle="oblique">{this.state.ingredients}</Box></Typography>
                    <Divider style={{ margin: 5, }} />
                </div>

                <div className="inputsSectionItem">
                    <Typography className="title-Tamanhos">Tamanhos</Typography>
                    {this.renderTam("P", this.state.valueP)}
                    {this.renderTam("M", this.state.valueM)}
                    {this.renderTam("G", this.state.valueG)}

                </div>
                <textarea
                    id="input-observacao"
                    onChange={this.handleInput}
                    placeholder="Observações sobre os itens do pedido"
                    class cols="30"
                    rows="5">
                </textarea>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.sectionItem.products
});

const mapDispatchToProps = actions =>
    bindActionCreators(sectionItemActions, actions); //repassar Actions para as props deste Component

export default connect(mapStateToProps, mapDispatchToProps)(SectionItemII);