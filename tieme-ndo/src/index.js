import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const store = createStore(reducer, applyMiddleWare(thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
