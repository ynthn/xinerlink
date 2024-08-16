import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//CSS
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
