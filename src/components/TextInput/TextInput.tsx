import React from 'react';
import { TextInputProps } from 'src/types';
import './index.scss';

const TextInput = ({
  value,
  placeholder,
  type = 'text',
  variant,
  change,
}: TextInputProps) => {
  const inputVariant = `input-field ${
    variant === 'highlight' ? 'highlight' : ''
  }`;

  return (
    <div className="content-input">
      <input
        className={inputVariant}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={change}
      />
    </div>
  );
};

export default TextInput;
