import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * INEMEC Card Component
 * Card corporativo siguiendo la identidad de marca INEMEC
 */
const Card = ({
  children,
  header,
  footer,
  hoverable = true,
  className = '',
  ...props
}) => {
  const baseClass = 'inemec-card';
  const hoverClass = hoverable ? 'inemec-card--hoverable' : '';

  const classes = [baseClass, hoverClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {header && <div className="inemec-card__header">{header}</div>}
      <div className="inemec-card__body">{children}</div>
      {footer && <div className="inemec-card__footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
