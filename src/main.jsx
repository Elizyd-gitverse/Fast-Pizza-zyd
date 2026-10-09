import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
     <Toaster 
     position='top-center'
     gutter={12}
     containerStyle={{margin: '12px'}}
     toastOptions={{
      success: {
        duration: 3000
      },
      error: {
        duration: 5000
      },
      style: {
        padding: '8px 6px',
        backgroundColor: '#d3f9d8',
        color: '#343a40',
        border: '8px solid #2f9e44'
      }
     }}
     />
  </StrictMode>,
)
