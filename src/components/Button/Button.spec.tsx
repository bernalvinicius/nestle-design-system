import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders the label correctly', () => {
    const label = 'Submit';
    const onClickMock = jest.fn();
    render(
      <Button variant="info" label="Submit" disabled click={onClickMock} />
    );
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it('does not call onClick when disabled', () => {
    const onClickMock = jest.fn();
    render(
      <Button variant="info" label="Submit" disabled click={onClickMock} />
    );
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(onClickMock).not.toBeCalled();
  });

  it('calls onClick when enabled', () => {
    const onClickMock = jest.fn();
    render(<Button variant="info" label="Submit" click={onClickMock} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(onClickMock).toBeCalledTimes(1);
  });

  it('renders the icon correctly', () => {
    const iconSrc = 'https://w7.pngwing.com/pngs/477/596/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon.png';
    const onClickMock = jest.fn();
    const altText = 'Icon';
    render(<Button variant="info" label="Submit" click={onClickMock} icon={iconSrc} />);
    const imgElement = screen.getByAltText(altText);
    expect(imgElement).toHaveAttribute('src', iconSrc);
  });
});
