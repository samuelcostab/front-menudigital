import React from 'react';
import './styles/TotalPrice.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';//conecta ao state geral (store)


function TotalPrice({ total, setOpen }) {

    return (
        <div className="float container-fluid" onClick={() => setOpen(true)} >
            <div className="row align-items-center no-gutters">
                <div className="col-8">
                    <i className="my-float">Total: </i>
                    <i className="my-float">{Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</i>
                </div>
                <div className="col-4" style={{fontSize: "14px"}}>
                    <ShoppingCartIcon />
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    total: state.sectionItem.total
});

export default connect(mapStateToProps)(TotalPrice);