import React from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#app');


const ItemModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    onRequestClose={props.handleClearRandomItem}
    contentLabel="Random Item"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Item:</h3>
    {props.selectedItem && <p className="modal__body">{props.selectedItem}</p>}
    <button className="button" onClick={props.handleClearRandomItem}>Close</button>
  </Modal>
)

export default ItemModal;
