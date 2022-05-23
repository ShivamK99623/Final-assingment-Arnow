
import './App.css';
import Login from './Component/Login';
import Home from './Component/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar';

function App() {
 
  return (
    <div>  
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path="/Home"  element={<Home  time={10000}/>} />
        </Routes>
      </div>);
}

export default App;
