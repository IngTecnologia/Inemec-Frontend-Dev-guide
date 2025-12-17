import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

/**
 * INEMEC Badge Component
 * Badge/Tag corporativo siguiendo la identidad de marca INEMEC
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClass = 'inemec-badge';
  const variantClass = `inemec-badge--${variant}`;
  const sizeClass = `inemec-badge--${size}`;

  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'success',
    'info',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Badge;
