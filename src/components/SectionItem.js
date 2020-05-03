import React, { Component } from 'react';
import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import {
    IconButton,
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

    chooseSelect = (e) => {
        this.setState({ sizeSelected: e.target.value });
    }

    handleBtnSize = (e) => {
        const id = e.target.id;

        const { qtdP, qtdM, qtdG } = this.state;

        if (id === "btn-add-P") {
            this.setState({ qtdP: qtdP + 1 },
                () => {
                    const state = this.state;
                    this.props.getOrderItem(state);
                }
            );
        }

        if (id === "btn-add-M") {
            this.setState({ qtdM: qtdM + 1 },
                () => {
                    const state = this.state;
                    this.props.getOrderItem(state);
                }
            );
        }

        if (id === "btn-add-G") {
            this.setState({ qtdG: qtdG + 1 },
                () => {
                    const state = this.state;
                    this.props.getOrderItem(state);
                }
            );
        }

        if (id === "btn-remove-P") {
            if (qtdP > 0) {
                this.setState({ qtdP: qtdP - 1 },
                    () => {
                        const state = this.state;
                        this.props.getOrderItem(state);
                    }
                );
            }
        }

        if (id === "btn-remove-M") {
            if (qtdM > 0) {
                this.setState({ qtdM: qtdM - 1 },
                    () => {
                        const state = this.state;
                        this.props.getOrderItem(state);
                    }
                );
            }
        }

        if (id === "btn-remove-G") {
            if (qtdG > 0) {
                this.setState({ qtdG: qtdG - 1 },
                    () => {
                        const state = this.state;
                        this.props.getOrderItem(state);
                    }
                );
            }
        }
        /*this.setState({ quantity: e.target.value },
            () => {
                const state = this.state;
                this.props.getOrderItem(state);
            }
        );
        */

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

    renderSubTotalItem = () => {
        const { valueP, valueM, valueG, qtdP, qtdM, qtdG } = this.state;

        let valP = parseFloat(valueP.substring(2, 7));
        let valM = parseFloat(valueM.substring(2, 7));
        let valG = parseFloat(valueG.substring(2, 7));

        let subTotal = (qtdP * valP) + (qtdM * valM) + (qtdG * valG);


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
                            <IconButton color="gray" aria-label="add order" component="span">
                                <RemoveCircleOutlineOutlined id="btn-remove-P" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                            <IconButton color="gray" aria-label="add order" component="span">
                                <AddCircleOutlineOutlined id="btn-add-P" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                        </div>
                        {this.renderQtdP()}
                    </div>

                    <div className="sectionSize">
                        <Typography >M</Typography>
                        <Typography>{this.state.valueM}</Typography>
                        <div className="btnsAddOrRemove">
                            <IconButton color="gray" aria-label="add order" component="span">
                                <RemoveCircleOutlineOutlined id="btn-remove-M" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                            <IconButton color="gray" aria-label="add order" component="span">
                                <AddCircleOutlineOutlined id="btn-add-M" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                        </div>
                        {this.renderQtdM()}
                    </div>

                    <div className="sectionSize">
                        <Typography >G</Typography>
                        <Typography>{this.state.valueG}</Typography>
                        <div className="btnsAddOrRemove">
                            <IconButton color="gray" aria-label="add order" component="span">
                                <RemoveCircleOutlineOutlined id="btn-remove-G" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                            <IconButton color="gray" aria-label="add order" component="span">
                                <AddCircleOutlineOutlined id="btn-add-G" onClick={this.handleBtnSize} fontSize="medium" />
                            </IconButton>
                        </div>
                        {this.renderQtdG()}
                    </div>
                </div>
                {this.renderSubTotalItem()}
            </div>
        );
    }
}

/*
<FormControl variant="outlined">
                        <InputLabel id="select-sizes-label">Tamanho</InputLabel>
                        <Select className="selectInput" label="Tamanho" labelId="select-outlined-label"
                            id="select-sizes"
                            value={this.state.size}
                            onChange={this.chooseSelect} >

                            <MenuItem value="P">P {this.state.valueP}</MenuItem>
                            <MenuItem value="M">M {this.state.valueM}</MenuItem>
                            <MenuItem value="G">G {this.state.valueG}</MenuItem>
                        </Select>
                        </FormControl>

                        <FormControl >
                        <TextField className="numberInput"
                            variant="outlined"
                            id="outlined-number"
                            label="Qtd."
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleInputNumber} />
                    </FormControl>


*/