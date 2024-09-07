import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.jsx'
import Events from './events.jsx'
import Gallery from './gallery.jsx'
import Login from './login.jsx'
import Navbar from './Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
  </React.StrictMode>,
)
