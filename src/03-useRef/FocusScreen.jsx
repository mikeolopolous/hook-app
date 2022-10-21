import { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleOnClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        className="form-control"
        type="text"
        placeholder="Ingrese nombre"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={ handleOnClick }
      >
        Set focus
      </button>

    </>
  )
}
