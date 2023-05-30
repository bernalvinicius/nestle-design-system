import React, { useState } from 'react';
import { TextInput } from 'src/components';

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div>
      <TextInput
        value={value}
        change={handleInputChange}
        placeholder="Full Name"
        type="text"
        variant="highlight"
      />
    </div>
  );
}

export default App;
