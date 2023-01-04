import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi. How are you?', likesCount: 12 },
  { id: 2, message: 'Its my first post', likesCount: 11 },
]

// data
let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Victor' },
  { id: 6, name: 'Valera' }
]
// data
let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your IT-KAMASUTRA ?' },
  { id: 3, message: 'Yo !!!' },
  { id: 4, message: 'Yo !!!' },
  { id: 5, message: 'Yo !!!' },
  { id: 6, message: 'Yo !!!' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
