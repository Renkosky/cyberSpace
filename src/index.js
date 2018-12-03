import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
// import Login from './pages/Login/login'
import registerServiceWorker from './registerServiceWorker'
import Route from './pages/Route'
ReactDOM.render(<Route />, document.getElementById('root'))
registerServiceWorker()
