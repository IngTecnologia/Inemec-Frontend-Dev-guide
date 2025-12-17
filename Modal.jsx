import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * INEMEC Modal Component
 * Modal corporativo siguiendo la identidad de marca INEMEC
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdropClick = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="inemec-modal-backdrop" onClick={handleBackdropClick}>
      <div className={`inemec-modal inemec-modal--${size}`}>
        <div className="inemec-modal__header">
          <h2 className="inemec-modal__title">{title}</h2>
          {showCloseButton && (
            <button
              className="inemec-modal__close"
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              ×
            </button>
          )}
        </div>
        <div className="inemec-modal__body">{children}</div>
        {footer && <div className="inemec-modal__footer">{footer}</div>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  closeOnBackdropClick: PropTypes.bool,
  showCloseButton: PropTypes.bool,
};

export default Modal;
