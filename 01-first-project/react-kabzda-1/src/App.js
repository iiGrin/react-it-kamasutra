import React from 'react';
//import logo from './logo.svg';
import './App.css';


// inserted components
const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg'></img>
        <nav className='nav'>
          <div>
            <a href='#'>Profile</a>
          </div>
          <div>
            <a href='#'>Messages</a>
          </div>
          <div>
            <a href='#'>News</a>
          </div>
          <div>
            <a href='#'>Music</a>
          </div>
          <div>
            <a href='#'>Settings</a>
          </div>
          <div></div>
          <div></div>
        </nav>
        <div className='content'>
          <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
          </div>
          <div>
            ava + disc
          </div>
          <div>
            my post
            <div>
              new post
            </div>
            <div>
              <div>
                post1
              </div>
              <div>
                post2
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
