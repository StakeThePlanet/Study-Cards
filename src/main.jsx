import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    console.log("hi")
    <App />
    
  </React.StrictMode>,
)
