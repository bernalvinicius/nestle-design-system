import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';
import { TextInputProps } from 'src/types';

describe('Text Input', function () {
  const props: TextInputProps = {
    value: '',
    placeholder: 'Enter some text',
    type: 'text',
    variant: 'highlight',
    change: jest.fn(),
  };

  it('should render default', function () {
    render(<TextInput {...props} />);

    expect(screen.getByPlaceholderText('Enter some text')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renders with highlight variant', () => {
    render(<TextInput {...props} />);

    expect(screen.getByRole('textbox')).toHaveClass('highlight');
  });

  it('calls onChange handler when text input changes', () => {
    const changeCallback = jest.fn();
    render(
      <TextInput
        value="hello"
        variant="neutral"
        placeholder="Enter text"
        change={changeCallback}
      />
    );

    const inputEl = screen.getByRole('textbox');
    userEvent.type(inputEl, 'hello');

    expect(changeCallback).toHaveBeenCalledTimes(5);
    expect(inputEl).toHaveValue('hello');
  });

  it('sets correct input type', () => {
    render(
      <TextInput
        value=""
        placeholder="Password"
        type="password"
        variant="neutral"
        change={jest.fn()}
      />
    );
    const inputEl = screen.getByPlaceholderText('Password');

    expect(inputEl).toHaveAttribute('type', 'password');
  });

  it('validates email input', async () => {
    render(
      <TextInput
        value="user@example.com"
        placeholder="Enter your email"
        type="email"
        variant="neutral"
        change={jest.fn()}
      />
    );
    const inputEl = screen.getByPlaceholderText('Enter your email');
    userEvent.type(inputEl, 'user@example.com');

    await waitFor(() => {
      expect(inputEl).toHaveValue('user@example.com');
    });
  });
});
