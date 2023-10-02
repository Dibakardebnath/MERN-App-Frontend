import {Navigate, Route, Routes} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Dashboard } from '../Pages/Dashboard'
import { Create } from '../Pages/Create'
import { About } from '../Pages/About'
import { Register } from '../Pages/Register'
import { Blog } from '../Pages/Blog'
import { useSelector } from 'react-redux'


export const AllRoute=()=>{
   const token=JSON.parse(localStorage.getItem("token"))
   const {login}=useSelector((store)=>store)
   console.log(login)
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={login?<Dashboard/>:<Navigate to={'/register'} />}/>
            <Route path='/create' element={login?<Create/>:<Navigate to={'/register'} />}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
           
            <Route path='/dashboard/:id' element={<Blog/>}/>

        </Routes>
    )
}
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Home } from '../Pages/Home';
// import { Dashboard } from '../Pages/Dashboard';
// import { Create } from '../Pages/Create';
// import { About } from '../Pages/About';
// import { Register } from '../Pages/Register';
// import { Blog } from '../Pages/Blog';
// import { useSelector } from 'react-redux';

// export const AllRoute = () => {
//   const token = JSON.parse(localStorage.getItem("token"));

//   // Use the Navigate component to perform conditional navigation
//   if (!token) {
//     return <Navigate to="/register" />;
//   }

//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//       <Route path='/create' element={<Create />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/register' element={<Register />} />
//       <Route path='/dashboard/:id' element={<Blog />} />
//     </Routes>
//   );
// };
