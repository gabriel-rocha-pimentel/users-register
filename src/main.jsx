//React Config
import React from 'react'
import ReactDOM from 'react-dom/client'

//Pages
import Home from './pages/home/Home.jsx';

//Estyles
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
