import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl/>
  </StrictMode>,
)



