import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SectionItemII from './SectionItemII'
import './styles/Modal.css';



const item = {
    item: "A Moda!",
    ingredients: "Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Cebola, Ketchup ",
    valorP: "R$5.00", valorM: "R$7.50", valorG: "R$9.00"
}

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Pedir
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="paper">
              <SectionItemII ref={item} item={item} key={'item' + 1} />
              <button >Confirmar</button>
            </div>
          </Fade>

        </Modal>
      </div>
    );
  }