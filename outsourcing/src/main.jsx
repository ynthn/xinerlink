import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'primereact/resources/themes/lara-light-indigo/theme.css';  // O cualquier otro tema
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
