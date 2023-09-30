import { Link, NavLink } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Button  } from "@chakra-ui/react"
import { AuthData } from "../Redux/Action"
import { useState } from "react"
export const Nav=()=>{
    const {isAuth,PersonalData}=useSelector((store)=>store)
    const [menuOpen, setMenuOpen]=useState(false)
    console.log(menuOpen)
    const dispath=useDispatch()
    const handlBtn=()=>{
        
      localStorage.removeItem('token');
      dispath(AuthData(true))

    }

    // console.log(isAuth)
    return <nav>
      <ul className={menuOpen?"open":""}>
        <li><NavLink to={'/'} className="link">Home</NavLink></li>
        <li> <NavLink to={'/dashboard'} className="link">Dashboard</NavLink></li>
        <li> <NavLink to={'/create'} className="link">Create</NavLink></li>
        <li> <NavLink to={'/About'} className="link">About</NavLink></li>
      </ul>

      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        
      <NavLink to={'/register'} className="title">{isAuth?
       <Box className="logoutBtn">
     <Button className="logout" onClick={()=>handlBtn()}>Logout</Button>
      <Avatar  size='sm' className="avatar-style" name={PersonalData[0].email} src="" />

       </Box>
       :"Register"}</NavLink>
       
       
    </nav>
}
