
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n.ts'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);