import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SectionItemII from './SectionItemII'

import { bindActionCreators } from 'redux';//conecta as actions criadas
import { connect } from 'react-redux';//conecta ao state geral (store)
import * as detailsItemActions from '../redux/actions/detailsItem';

import './styles/Modal.css'

const item = {
    item: "A Moda!",
    ingredients: "Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: "R$5.00", valorM: "R$7.50", valorG: "R$9.00"
}

class ModalSectionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }


    handleClose = () => {
        this.setState({ isOpen: false })
    };
    handleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    render() {
        return (
            <div>
                <Button className="btn-Confirmar" onClick={this.handleModal}> Pedir </Button>

                <Modal show={this.state.isOpen} onHide={this.handleClose}>
                    <button className="btn-CloseModal" onClick={this.handleClose}><span>X</span></button>
                    <Modal.Body closeButton>
                        <SectionItemII ref={item} item={item} key={'item' + 1} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-Confirmar" onClick={this.handleClose}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    detailsItem: state.detailsItem,
    sectionItem: state.sectionItem.product,
});

const mapActionsToProps = actions => 
    bindActionCreators(detailsItemActions, actions); //repassar Actions para as props deste Component

export default connect(mapStateToProps,mapActionsToProps)(ModalSectionItem);