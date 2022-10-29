import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';
import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);
