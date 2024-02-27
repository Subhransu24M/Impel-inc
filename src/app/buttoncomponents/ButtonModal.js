// "use client"
import ReactModal from 'react-modal';
import { useState } from 'react';
const ButtonModal = ({ isOpen, onClose, children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <button onClick={closeModal}>Close Modal</button>
      {children}
    </ReactModal>
  );
};

export default ButtonModal