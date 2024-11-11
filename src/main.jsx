import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JobAdverts } from './components/JobAdverts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobAdverts />
  </StrictMode>,
)
