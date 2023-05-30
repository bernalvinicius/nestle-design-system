import React from 'react';
import { TextInputProps } from 'src/types';

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
    <input
      className={inputVariant}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={change}
    />
  );
};

export default TextInput;
