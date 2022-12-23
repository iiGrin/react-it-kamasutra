import logo from './logo.svg';
import './App.css';


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


// create components
const Technologies = () => {
  return (
    <div>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JS</li>
        <li>REACT</li>
      </ul>
    </div>
  )
}

const Header = () => { 
  return (<div>
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Feed</a>
          <a href="#">Messages</a>
          </div>);
}

export default App;
