import React from 'react';
import ReactModal from 'react-modal';
import './closeModal.css';

interface CustomModalProps {
  isOpen: boolean;
  onOpen?: ReactModal.OnAfterOpenCallback | undefined;
  closeModal?(event: React.MouseEvent | React.KeyboardEvent): void;
  contentLabel?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onOpen,
  closeModal,
  children,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={onOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{ overlay: {}, content: { inset: '20%' } }}
        ariaHideApp={false}
      >
        {children}
      </ReactModal>
    </>
  );
};

export default CustomModal;
