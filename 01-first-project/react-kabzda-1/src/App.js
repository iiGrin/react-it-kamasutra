import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// inserted components
const App = (props) => {
  return (
    // navigation(route)
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route /*exact*/ path='/dialogs' element={
              <Dialogs
                state={props.state.dialogsPage} />} />
            <Route path='/profile'
                   element={<Profile
                   profilePage={props.state.profilePage}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
