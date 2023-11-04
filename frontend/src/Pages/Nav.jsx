import { Link, NavLink } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Button  } from "@chakra-ui/react"
import { AuthData } from "../Redux/Action"
import { useEffect, useState } from "react"
export const Nav=()=>{
    const {isAuth,PersonalData}=useSelector((store)=>store)
    const [menuOpen, setMenuOpen]=useState(false)
    // console.log(menuOpen)
      
    const mail=JSON.parse(sessionStorage.getItem("email"))

    console.log(mail)

    const dispath=useDispatch()
    const handlBtn=()=>{
        
      sessionStorage.removeItem('token');
      dispath(AuthData(false))
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
        
      <NavLink  to={'/register'} className="title">{isAuth?
       <Box  className="logoutBtn">
     <Button className="logout" onClick={()=>handlBtn()} colorScheme="#1dd88a">Logout</Button>
      <Avatar  size='sm' className="avatar-style" name={mail} src=""/>

       </Box>
       :"Register"}</NavLink>
       
       
    </nav>
}
