import React, { useState } from 'react';
import { Button, TextInput } from 'src/components';
import FacebookSVG from 'src/assets/images/icons/facebook.svg';
import GoogleSVG from 'src/assets/images/icons/google.svg';

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '50px',
      }}
    >
      <TextInput
        value={value}
        change={handleInputChange}
        placeholder="Full Name"
        type="text"
        variant="neutral"
      />

      <Button click={() => {}} variant="primary" label="Sign Up" />
      <Button
        click={() => {}}
        variant="primary"
        label="Log In With Facebook"
        icon={FacebookSVG}
      />
      <Button
        click={() => {}}
        variant="positive"
        label="Log In With Google"
        icon={GoogleSVG}
      />
      <Button
        click={() => {}}
        variant="info"
        label="Log In With Google"
        icon={GoogleSVG}
        disabled
      />
    </div>
  );
}

export default App;
