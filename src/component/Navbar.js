import { Link, NavLink, Outlet } from "react-router-dom"
const Navbar = () => {
  return (
      <>
      {/* <ul> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
      </ul> */}

      {/* css add karva mate NavLink Use thy */}
        <ul>
            <li><NavLink to="/" style={({isActive})=>{return {backgroundColor : isActive? 'red' : ''}}}>Home</NavLink></li>
            <li><NavLink to="/About" style={({isActive})=>{return {backgroundColor : isActive? 'red' : ''}}}>About</NavLink></li>
            <li><NavLink to="/Contact" style={({isActive})=>{return {backgroundColor : isActive? 'red' : ''}}}>Contact</NavLink></li>
            <li><NavLink to="/Post" style={({isActive})=>{return {backgroundColor : isActive? 'red' : ''}}}>Post</NavLink></li>
            <li><NavLink to="/login" style={({isActive})=>{return {backgroundColor : isActive? 'red' : ''}}}>Login</NavLink></li>
        </ul>
        
      </>
  )
}
export default Navbar