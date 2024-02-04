import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Login from './components/Login';
import  Navbar from './components/Navbar';
import  Home from './components/Home';
import  Details from './components/Details';
import  Cart from './components/Cart';
import  Register from './components/Register';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
