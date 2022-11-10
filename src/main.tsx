import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { APiContextProvider } from './Context/Context'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <APiContextProvider>
    <App />
    </APiContextProvider>
    
  </React.StrictMode>
)
