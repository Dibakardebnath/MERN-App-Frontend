import { Link } from "react-router-dom"
import './Nav.css'
export const Nav=()=>{
    return <div className="navbar" >
        <Link to={'/'} className="link">Home</Link>
        <Link to={'/dashboard'} className="link">Dashboard</Link>
        <Link to={'/create'} className="link">Create</Link>
        <Link to={'/About'} className="link">About</Link>
       <Link to={'/register'} className="link">Register</Link>
    </div>
}