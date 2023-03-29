import logo from './logo.svg';
import './App.css';
import pic from "../src/images/logo.png"
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <header>
      
      <nav className='nav-bar'>
        {/* <video className='vedio' src={vid} loop muted autoPlay={true}/> */}
      <div className='nav-links'>
      <ul>
        <li><a href=''>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#menu'>MENU</a> </li>
       
      </ul>
      <img src={pic} alt=""/><p>DIYA's CAFE</p>
      </div>
      </nav>
      </header>

     <Home/>
     <About/>
     <Menu/>

    </div>
  );
}

export default App;
