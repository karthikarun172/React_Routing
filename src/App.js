import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';

function App() {

  const name = "ArunKathik"

  console.log("done");
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Link to="/" > Home</Link>
          </ul>
          <ul>
            <Link to="/about" >About</Link>
          </ul>
          <ul>
            <Link to={'/profile'} >Profile</Link>
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/profile' element={<Profile />} ></Route>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
