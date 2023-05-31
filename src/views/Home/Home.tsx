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
    <div className="container">
      <div className="content">
        <div className="content-title">
          <h1>Register</h1>
        </div>

        <div className="form">
          <div>
            <div className="social-buttons">
              <Button
                click={() => {}}
                variant="positive"
                label="Log In With Facebook"
                icon={FacebookSVG}
              />
            </div>
            <div className="social-buttons">
              <Button
                click={() => {}}
                variant="primary"
                label="Log In With Google"
                icon={GoogleSVG}
              />
            </div>
          </div>
          <h2>Create an Account</h2>
          <div>
            <div className="social-buttons">
              <TextInput
                value={data.fullName}
                change={(event) => handleInputChange(event, 'fullName')}
                placeholder="Full Name"
                type="text"
                variant="neutral"
              />
            </div>
            <div className="social-buttons">
              <TextInput
                value={data.email}
                change={(event) => handleInputChange(event, 'email')}
                placeholder="Enter your email"
                type="email"
                variant="neutral"
              />
            </div>
            <div className="social-buttons">
              <TextInput
                value={data.password}
                change={(event) => handleInputChange(event, 'password')}
                placeholder="Password"
                type="password"
                variant="neutral"
              />
            </div>
          </div>

          <div className="social-buttons">
            <Button
              click={handleSignUp}
              variant="info"
              label="Sign Up"
              disabled={!formValid}
              data-testid="sign-up-button"
            />
          </div>
          <div className="form-footer">
            <div>
              <span className="account">
                Need an account? <span className="account-login">Log in</span>
              </span>
            </div>
            <div className="social-buttons">
              <span className="account-password">Forget Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
