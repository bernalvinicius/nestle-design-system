import React, { ChangeEvent, useState } from 'react';
import { Button, TextInput } from 'src/components';
import FacebookSVG from 'src/assets/images/icons/facebook.svg';
import GoogleSVG from 'src/assets/images/icons/google.svg';
import { SignUpProps } from 'src/types';
import { validateFields } from 'src/utils';

const Home = () => {
  const [formValid, setFormValid] = useState<boolean>(false);
  const [data, setData] = useState<SignUpProps>({
    fullName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    const isValid = validateFields(data);
    setFormValid(isValid);
  };

  const handleSignUp = () => {
    // Handle data
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '50px',
      }}
    >
      <h1>Register</h1>

      <Button
        click={() => {}}
        variant="positive"
        label="Log In With Facebook"
        icon={FacebookSVG}
      />
      <Button
        click={() => {}}
        variant="primary"
        label="Log In With Google"
        icon={GoogleSVG}
      />
      <h2>Create an Account</h2>
      <TextInput
        value={data.fullName}
        change={(event) => handleInputChange(event, 'fullName')}
        placeholder="Full Name"
        type="text"
        variant="neutral"
      />
      <TextInput
        value={data.email}
        change={(event) => handleInputChange(event, 'email')}
        placeholder="Enter your email"
        type="email"
        variant="neutral"
      />
      <TextInput
        value={data.password}
        change={(event) => handleInputChange(event, 'password')}
        placeholder="Password"
        type="password"
        variant="neutral"
      />

      <Button
        click={handleSignUp}
        variant="info"
        label="Sign Up"
        disabled={!formValid}
        data-testid="sign-up-button"
      />
    </div>
  );
};

export default Home;

/**
 * os comopnentes estão criado ja com os testes, agora falta fazer:
 *
 * - Layout da tela home
 * - Testes tela home
 * - responsividade
 */
