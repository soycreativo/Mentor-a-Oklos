import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// it allows to set the routes to go to the other components
import { BrowserRouter as Router } from 'react-router-dom'
// provides the states to the other components
import DataProvider from './redux/store'

ReactDOM.render(
  <DataProvider>
    <Router>
      <App />
    </Router>
  </DataProvider>,
  document.getElementById('root')
)
