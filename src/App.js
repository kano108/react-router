import './App.css';
import {BrowserRouter, Navigate, Route ,Routes} from "react-router-dom"
import Home from './component/pages/home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import  Navbar  from './component/Navbar';
import Post from './component/pages/post';
import Dashboard from './component/pages/Dashboard';
import Login from './component/pages/login';
function App() {
  let isLogged=true
  let data={
    'st':'User Not Logged in'
  }
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
    <Routes>
    {/* <Route path="/" element={<h1>Hello React Router</h1>} /> */}
    <Route path="/" element={<Home/>} />
    <Route path="About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Post/:category/:id" element={<Post/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={isLogged ? <Dashboard/> : <Navigate to="/login" replace state={data}/>}/>

    <Route path='*' element={<h1>Error 404 Page Not Found !!</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
