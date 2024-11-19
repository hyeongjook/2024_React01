import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentList from './components/step03/CommentList';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <CommentList />
    <Welcome name='hong' />
    <Welcome name='park' />
  </React.StrictMode>
);
reportWebVitals();
