import { ChangeEventHandler } from 'react';

export interface TextInputProps {
  value: string;
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  variant: 'neutral' | 'highlight';
  change: ChangeEventHandler<HTMLInputElement>;
}
