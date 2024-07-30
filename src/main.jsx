import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Activities from './activities.jsx'
import Gallery from './gallery.jsx'
import Login from './login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
