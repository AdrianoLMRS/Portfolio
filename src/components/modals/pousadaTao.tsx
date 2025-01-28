// modals/pousadaTao.tsx
import React from 'react';
import Modal from '@components/others/Modal';
import './index.scss';

interface PousadaProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const Pousada: React.FC<PousadaProps> = ({ isModalOpen, closeModal }) => {
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h4>Modal</h4>
            <p>Hello world!</p>
        </Modal>
    );
};

export default Pousada;