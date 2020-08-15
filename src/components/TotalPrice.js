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
                <i className="my-float">R$ {total.length}</i>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    total: state.sectionItem.products
    //  > 0 ? state.sectionItem.products.reduce( 
    //     (acc, elem) => {
    //         return acc + elem.subTotal;
    //     }) : 0,
});

export default connect(mapStateToProps)(TotalPrice);