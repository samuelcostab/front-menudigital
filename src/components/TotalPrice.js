import React from 'react';
import './styles/TotalPrice.css'

import { connect } from 'react-redux';//conecta ao state geral (store)


function TotalPrice({ total, setOpen }) {

    return (
        <div className="float" onClick={() => setOpen(true)} >
            <div>
                <i className="my-float">Total</i>
            </div>
            <i className="my-float">R$ {total}</i>
        </div>
    )
}


const mapStateToProps = state => ({
    total: state.sectionItem.total
});

export default connect(mapStateToProps)(TotalPrice);