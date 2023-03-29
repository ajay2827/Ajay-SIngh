// importing depen
import { Routes, Route } from "react-router-dom";

// importing pages
import Register from './pages/Register'
import Login from './pages/Login'
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
      </Routes>
    </>

  );
}

export default App;
