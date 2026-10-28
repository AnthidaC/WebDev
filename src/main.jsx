import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Static hosting (including GitHub Pages) cannot set COOP/COEP response headers.
// Register the same-origin isolation worker only when the project lab is opened.
if (!window.crossOriginIsolated && (localStorage.getItem('webdev-area') === 'fullstack' || new URLSearchParams(location.search).get('course') === 'fullstack')) {
  window.coi = { coepCredentialless: () => true, quiet: true };
  const script = document.createElement('script');
  script.id = 'fullstack-isolation';
  script.src = new URL('coi-serviceworker.js', document.baseURI).href;
  document.head.appendChild(script);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
