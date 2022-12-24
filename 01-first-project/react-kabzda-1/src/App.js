import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';

// inserted components
const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Technologies />
      </div>
    </div>
  );
}

export default App;
