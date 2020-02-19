import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import Menu from 'components/Menu';
const data = {
  info : {
    name : '',
    age : ''
  }
}
const Root = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

export default Root;