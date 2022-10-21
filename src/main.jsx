import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoHook } from './06-memos/MemoHooks'
import './index.css'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
// import { FocusScreen } from './03-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />
  // </React.StrictMode>
)
