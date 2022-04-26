import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';

function App() {

  console.log("done");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/profile' element={<Profile />} ></Route>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
