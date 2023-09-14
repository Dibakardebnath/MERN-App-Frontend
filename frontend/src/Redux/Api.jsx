import axios from "axios"
import {  DeleteData, GetData, UpdateData, personalData } from "./Action"

export const getPublicData=(page)=>async(dispatch)=>{
    try {
      await axios.get(`http://localhost:8000/?page=${page}&limit=3`)
       .then((res)=>{
        dispatch(GetData(res.data))
       
         
       })
    } catch (error) {
       console.log(error)
    }
}

// page,value,order
export const getPersonalData=(page,value,order)=>async(dispatch)=>{
   try {
     
    const response= await axios.get(`http://localhost:8000/dashboard?category=${value}&page=${page}&limit=3&sortby=createdAt&order=${order}`,{
      headers:{
         'Content-Type': 'application/json',
         'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
    })
    
   console.log(response.data)
       dispatch(personalData(response.data))

         //  console.log(response.data.newId)
 
   } catch (error) {
      
      console.log(error)
   }
}

export const deleteData = (_id) => async (dispatch) => {
   try {
     console.log(_id);
     const res = await axios.delete(`http://localhost:8000/delete/${_id}`,{
      headers:{
         'Content-Type': 'application/json',
         'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
     })
     console.log("Delete response:", res);
     dispatch(DeleteData(_id));
   } catch (error) {
     console.log("Error:", error);
   }
 }

 export const updateValue = (id, value) => async (dispatch) => {
   try {
     const res = await axios.put(`http://localhost:8000/update/${id}`, value, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem('token')}`
       }
     });
 
     dispatch(UpdateData(res.data.users))
   } catch (error) {
     console.log("Error:", error);
   }
 }
 
 