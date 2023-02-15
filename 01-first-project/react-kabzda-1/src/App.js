import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

// inserted components
const App = () => {
  return (
    // navigation(route)
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route /*exact*/ path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
