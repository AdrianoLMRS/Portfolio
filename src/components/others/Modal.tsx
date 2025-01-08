import React from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;  // Dont render modal

  return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </div>
  );
};

export default Modal;
