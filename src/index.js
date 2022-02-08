import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './store/store'
import { RootCmp } from './root-cmp';
import './assets/styles/main.scss';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


