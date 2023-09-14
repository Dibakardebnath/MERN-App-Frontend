import {Route, Routes} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Dashboard } from '../Pages/Dashboard'
import { Create } from '../Pages/Create'
import { About } from '../Pages/About'
import { Register } from '../Pages/Register'
import { Blog } from '../Pages/Blog'
import { useSelector } from 'react-redux'


export const AllRoute=()=>{
   
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
           
            <Route path='/dashboard/:id' element={<Blog/>}/>

        </Routes>
    )
}