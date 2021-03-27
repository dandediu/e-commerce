import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import combineProviders from 'utils/combine-providers';
import store from 'store';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';

const CombinedProviders = combineProviders();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <CombinedProviders> */}
      <App />
      {/* </CombinedProviders> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
