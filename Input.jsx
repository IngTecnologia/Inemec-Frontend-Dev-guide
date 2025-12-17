import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * INEMEC Input Component
 * Input corporativo siguiendo la identidad de marca INEMEC
 */
const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helper,
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClass = 'inemec-input';
  const errorClass = error ? 'inemec-input--error' : '';
  const fullWidthClass = fullWidth ? 'inemec-input--full' : '';

  const inputClasses = [baseClass, errorClass, fullWidthClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="inemec-input-group">
      {label && (
        <label htmlFor={inputId} className="inemec-input-label">
          {label}
          {required && <span className="inemec-input-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && <span className="inemec-input-error-message">{error}</span>}
      {helper && !error && (
        <span className="inemec-input-helper">{helper}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helper: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
