import { Link, NavLink } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Button  } from "@chakra-ui/react"
import { AuthData } from "../Redux/Action"
import { useState } from "react"
export const Nav=()=>{
    const {isAuth,PersonalData}=useSelector((store)=>store)
    const [menuOpen, setMenuOpen]=useState(false)
    const dispath=useDispatch()
    const handlBtn=()=>{
        
      localStorage.removeItem('token');
      dispath(AuthData(true))

    }

    console.log(isAuth)
    return <nav>
      <ul className={menuOpen?"open":""}>
        <li><NavLink to={'/'} className="link">Home</NavLink></li>
        <li> <NavLink to={'/dashboard'} className="link">Dashboard</NavLink></li>
        <li> <NavLink to={'/create'} className="link">Create</NavLink></li>
        <li> <NavLink to={'/About'} className="link">About</NavLink></li>
      </ul>

      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        
      <NavLink to={'/register'} className="title">{isAuth?
       <Box className="logoutBtn">
     <Button onClick={()=>handlBtn()}>logout</Button>
      <Avatar className="avatar-style" name={PersonalData[0].email} src="" />

       </Box>
       :"Register"}</NavLink>
       
       
    </nav>
}


// import { Button, Box, IconButton } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { useState } from "react"
// export const Nav = () => {
//   const { isAuth, PersonalData } = useSelector((store) => store);
//   const dispatch = useDispatch();
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const handleBtn = () => {
//     localStorage.removeItem("token");
//     dispatch(AuthData(true));
//   };

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   };

//   return (
//     <div className="navbar">
//       <Box display={{ base: "block", md: "none" }}>
//         <IconButton
//           onClick={toggleMobileNav}
//           className="hamburger-button"
//           size="sm"
//           icon={isMobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
//         />
//       </Box>
//       <Box
//         display={{ base: isMobileNavOpen ? "block" : "none", md: "block" }}
//         className="mobile-nav"
//       >
//         <Link to={"/"} className="link">
//           Home
//         </Link>
//         <Link to={"/dashboard"} className="link">
//           Dashboard
//         </Link>
//         <Link to={"/create"} className="link">
//           Create
//         </Link>
//         <Link to={"/About"} className="link">
//           About
//         </Link>
//         <Link to={"/register"} className="link">
//           {isAuth ? (
//             <Box className="logoutBtn">
//               <Button onClick={() => handleBtn()}>Logout</Button>
//               <Avatar
//                 className="avatar-style"
//                 name={PersonalData[0].email}
//                 src=""
//               />
//             </Box>
//           ) : (
//             "Register"
//           )}
//         </Link>
//       </Box>
//     </div>
//   );
// };
