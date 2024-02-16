import React from 'react'
import ReactDOM from "react-dom/client"

import App from "./HelloWorldApp"
import FirstApp from './FirstApp'

import "./index.css"
import CounterApp from './CounterApp'

ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <App/>
        <CounterApp value={1}></CounterApp>
    </React.StrictMode>    
)

// <CounterApp value={0}></CounterApp>
// <FirstApp title="Hola, soy CR7"></FirstApp>