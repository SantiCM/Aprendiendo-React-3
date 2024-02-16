import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp.jsx'
import "../src/index.css"
import { TodoApp } from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>

      <PokemonApp></PokemonApp>

      <TodoApp></TodoApp>

    </Provider>
    
  </React.StrictMode>,

)
