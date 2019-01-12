import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker'
import Route from './pages/Route'
import { Provider } from 'react-redux'
import store from './redux/store'
import _ from 'lodash'
import './index.less'
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://localhost:9093'
// }

axios.interceptors.response.use(
  response => response,
  error => {
    let errorMsg = _.get(error, 'response.data.message', '出现了错误')

    const statusCode = _.get(error, 'response.data.statusCode')
    if (statusCode === 401) {
      errorMsg = '登录已失效，请重新登录'
    }

    if (statusCode === 403) {
      errorMsg = '您无权限查看该界面'
    }

    console.error(error)
    return Promise.reject(errorMsg)
  }
)

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
