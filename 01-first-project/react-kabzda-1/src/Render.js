import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    );

}
