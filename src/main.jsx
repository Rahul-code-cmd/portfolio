import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.scss'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MyProvider } from './hooks/context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<MyProvider>
    <App />
</MyProvider>
  </StrictMode>
)
