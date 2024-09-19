import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}> {/*comentario aqui es donde el store genera el estado global para toda app*/}
    <App />
    </Provider>
  </React.StrictMode>,
)