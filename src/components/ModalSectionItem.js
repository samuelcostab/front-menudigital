import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SectionItemII from './SectionItemII'

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral (store)
import * as sectionItemActions from '../redux/actions/sectionItem';

import './styles/Modal.css'


class ModalSectionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            order: {},
        }
    }


    handleClose = () => {
        this.setState({ isOpen: false })
    };
    handleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    confirmItens = () => {
        const { order } = this.state;

        if (order) {
            //action para adicionar os items
            if(order.qtdG < 1 && order.qtdM < 1 && order.qtdP < 1 ){
                this.props.REMOVE_PRODUCT(order);
            }else{
                this.props.ADD_PRODUCT(order);
            }
            
        }

        this.handleClose();

    }

    getDataItems = (state) => {
        const dadosSectionItem = state;    

        this.setState({ order: dadosSectionItem },
            () => { });

    }

   
    render() {
        return (
            <div>
                <Button className="btn-Confirmar" onClick={this.handleModal}> Pedir </Button>

                <Modal show={this.state.isOpen} onHide={this.handleClose}>
                    <button className="btn-CloseModal" onClick={this.handleClose}><span>X</span></button>
                    <Modal.Body closeButton>
                        <SectionItemII ref={this.props.item} item={this.props.item} key={'item' + 1} getDataItems={this.getDataItems.bind(this)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-Confirmar" onClick={this.confirmItens}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    products: state.sectionItem.products,
});

const mapActionsToProps = actions =>
    bindActionCreators(sectionItemActions, actions); //repassar Actions para as props deste Component

export default connect(mapStateToProps, mapActionsToProps)(ModalSectionItem);