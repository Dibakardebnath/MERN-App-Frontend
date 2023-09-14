import { Link } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Button } from "@chakra-ui/react"
import { AuthData, personalData } from "../Redux/Action"
export const Nav=()=>{
    const {isAuth,PersonalData}=useSelector((store)=>store)
    const dispath=useDispatch()
    const handlBtn=()=>{
        
      localStorage.removeItem('token');
      dispath(AuthData(true))

    }

    console.log(isAuth)
    return <div className="navbar" >
        <Link to={'/'} className="link">Home</Link>
        <Link to={'/dashboard'} className="link">Dashboard</Link>
        <Link to={'/create'} className="link">Create</Link>
        <Link to={'/About'} className="link">About</Link>
       <Link to={'/register'} className="link">{isAuth?
       <Box className="logoutBtn">
<Button onClick={()=>handlBtn()}>logout</Button>
<Avatar className="avatar-style" name={PersonalData[0].email} src="" />

       </Box>
       :"Register"}</Link>
    </div>
}