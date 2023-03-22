import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import './modal.css';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ isOpened, isCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        isCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseModal]);

  const handleBackdropPress = e => {
    if (e.target === e.currentTarget) {
      isCloseModal();
    }
  };

  return createPortal(
    <div
      className={`modal ${isOpened ? 'open' : 'close'}`}
      onClick={handleBackdropPress}
    >
      <div className={`modal__content ${isOpened ? 'open' : 'close'}`}>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
