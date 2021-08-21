// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername, passRef}) {
  // const [error, setError] = React.useState(null)
  const [userName, setUserName] = React.useState('')
  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmitUsername(evt)
  }
  const handleChange = evt => {
    setUserName(evt.target.value.toLowerCase())
    // const isValid = evt.target.value === evt.target.value.toLowerCase()
    // console.log(isValid)
    // if (isValid) {
    //   setError(null)
    // } else {
    //   setError(`Username must be lower case`)
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          value={userName}
          ref={passRef}
          name="username"
          type="text"
          onInput={handleChange}
        />
        {/* {error && <div style={{marginTop: '4px', color: 'red'}}>{error}</div>} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const userNameRef = React.useRef()
  const onSubmitUsername = evt => {
    evt.preventDefault()
    console.log(evt.target.elements.username.value)
    alert(
      `You entered: ${evt.target.username.value} ${userNameRef.current.value}`,
    )
  }
  return (
    <UsernameForm passRef={userNameRef} onSubmitUsername={onSubmitUsername} />
  )
}

export default App
