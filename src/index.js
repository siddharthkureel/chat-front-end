import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; 
import thunk from "redux-thunk";

import {rootReducer} from './redux/reducers'
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
