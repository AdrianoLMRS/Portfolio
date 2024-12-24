import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'tsconfig-paths/register';
import '@styles/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
