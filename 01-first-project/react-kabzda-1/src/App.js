import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import classes from './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// inserted components
const App = (props) => {
  return (
    // navigation(route)
    <BrowserRouter> 
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs/>}/> 
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
