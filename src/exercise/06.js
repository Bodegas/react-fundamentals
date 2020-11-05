// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef} from "react"

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current?.elements?.username?.value)
  }

  return (
    <form ref={inputRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
