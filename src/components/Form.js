import React, { Component } from 'react';
import Section from '../components/Section';
import {FormControl,
        TextField,
        Grid } from '@material-ui/core';



export default class FormTemplate extends Component {
    constructor(props) {
        super(props);

        this.items = [3]

        this.state = {
            custumer: "",
            end: "",
            complement: "",
            itemsOrder: [],
            totalPrice: 0,
        };
    }

    getValueSection = (state) => {
        const { itemsOrder, subTotal } = state;
        this.setState({itemsOrder: itemsOrder, totalPrice: subTotal},
            () => {
                const state = this.state;
                console.log("Preço Total:");
                console.log(state.totalPrice)
                this.props.getOrderByClient(state)
            });    
    }

    handleInput = (e) => {
        if(e.target.id === "input-nome"){
            this.setState({ custumer: e.target.value}, () => {console.log(this.state)});
        }
        if(e.target.id === "input-endereco"){
            this.setState({ end: e.target.value}, () => {console.log(this.state)});
        }
        if(e.target.id === "input-complemento"){
            this.setState({ complement: e.target.value}, 
                () => {
                    const state = this.state;
                    this.props.getOrderByClient(state)
                });
        }
    }


render() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControl >
                    <TextField style={styles.inputText}
                        id="input-nome"
                        label="Nome Cliente"
                        helperText="Este campo é importante!"
                        variant="outlined"
                        onChange= {this.handleInput}/>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <FormControl >
                    <TextField style={styles.inputText}
                        id="input-endereco"
                        label="Endereço"
                        helperText="Este campo é importante!"
                        placeholder="Rua xxxx, 10000, Localidade"
                        variant="outlined"
                        onChange= {this.handleInput} />
                </FormControl>

                <FormControl >
                    <TextField style={styles.inputText}
                        id="input-complemento"
                        label="Complemento"
                        helperText="Este campo é importante!"
                        placeholder="Ponto de referência"
                        variant="outlined"
                        onChange= {this.handleInput} />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Section nameSection="Hamburgers" getValueSection={this.getValueSection.bind(this)}/>
            </Grid>
        </Grid>
    );
}
}

const styles = {
    inputText: {
        margin: 5,
    },
}