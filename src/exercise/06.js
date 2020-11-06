// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from "react";

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(inputRef.current?.elements?.username?.value);
  };

  const handleChangeInput = event => {
    const value = event?.target?.value;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : "Username must be lowercase");
  };

  return (
    <form ref={inputRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChangeInput} />
        <div style={{color: "red"}}>{error}</div>
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
