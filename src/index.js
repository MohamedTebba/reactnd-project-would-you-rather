import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import reducer from './reducers'
import middleware from './middlewares'
import './styles/index.css'

const store = createStore(reducer,middleware)

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
    , document.getElementById('root'));

