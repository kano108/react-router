import { useLocation } from "react-router-dom"

const Login = () => {
    let Location=useLocation() //login na hoy tena mate user not loggin mate 
    return (
        <>
    <h1>Login page</h1>
    <h2>{Location.state.st}</h2>
    </>
  )
}
export default Login 