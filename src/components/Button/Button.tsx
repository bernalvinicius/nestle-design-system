import React from 'react';
import { ButtonProps } from 'src/types';

const Button = ({ label, disabled, icon, variant, click }: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${disabled ? 'button-disabled' : ''}`}
      disabled={disabled}
      onClick={click}
    >
      {icon && (
        <span>
          <img src={icon} alt="Icon" />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
