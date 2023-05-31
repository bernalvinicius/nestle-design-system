import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home Page', function () {
  it('should render the component', () => {
    render(<Home />);
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('should enable the Sign Up button when all fields are filled correctly', () => {
    render(<Home />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signUpButton = screen.getByText('Sign Up');

    fireEvent.change(fullNameInput, { target: { value: 'Vinicius Bernal' } });
    fireEvent.change(emailInput, { target: { value: 'vinicius@nestle.com' } });
    fireEvent.change(passwordInput, { target: { value: 'nestle' } });

    expect(signUpButton).toBeEnabled();
  });
});
