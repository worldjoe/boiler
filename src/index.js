import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import DocumentApp from './DocumentApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import DocumentsClient from './DocumentsClient.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchDocuments } from './crudSlice';
if (store === undefined) {
  alert('store is undefined');
}


store.dispatch(fetchDocuments);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <DocumentApp />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
