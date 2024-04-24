import React from 'react';
import { createRoot } from 'react-dom'; // Correct import statement for ReactDOM
import App from './App';
import './index.css'; // Corrected file extension and removed comma
import './mediaQuery.css'; // Corrected file extension and removed comma
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Store from './Store';
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <App />
</Provider>,
);
