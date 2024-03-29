import React, { Component } from 'react';
import './styles/TotalPrice.css'

import { connect } from 'react-redux';//conecta ao state geral (store)


class TotalPrice extends Component {


    render() {
        const { total } = this.props;
        return (
            <div className="float">
                <div>
                    <i className="my-float">Total</i>
                </div>
                <i className="my-float">R$ {total}</i>
            </div>
        );
    }
}

 
const mapStateToProps = state => ({
    total: state.sectionItem.total
});

export default connect(mapStateToProps)(TotalPrice);