import React, { Component } from 'react';
import './TotalPrice.css'

export default class TotalPrice extends Component {

    render() {
        let valor = this.props.valor.toFixed(2)
        return (
            <div className="float">
                <div>
                    <i className="my-float">Total</i>
                </div>
                <i className="my-float">R$ {valor}</i>
            </div>
        );
    }
}
