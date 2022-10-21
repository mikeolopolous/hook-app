import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './05-useLayoutEffect/Layout'
import './index.css'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
// import { FocusScreen } from './03-useRef/FocusScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Layout />
  // </React.StrictMode>
)
