import { useEffect, useState } from "react"
import { Message } from "./Message.jsx"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "miguel",
    email: "miguel@gmail.com"
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="correo@correo.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === 'miguel2') && <Message />
      }

    </>
  )
}