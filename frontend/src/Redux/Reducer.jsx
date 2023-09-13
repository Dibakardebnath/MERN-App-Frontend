import { GET_DELETED_DATA, GET_PERSONAL_DATA, GET_PUBLIC_DATA, GET_UPDATED_DATA } from "./ActionType"



const initialState ={
    Data:[],
    total:0,
    PersonalData:[]
  
}
console.log(initialState)


export const Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_PUBLIC_DATA:{
            return {...state,Data: payload.users ,total:payload.total}
        }
        case GET_PERSONAL_DATA:{

            return {...state,PersonalData:payload.users ,total:payload.total}
        }

        case GET_DELETED_DATA:{
            let filterData=state.PersonalData.filter((item)=>item._id!==payload)
           
            return {
                ...state,PersonalData:filterData
            }
        }

        case GET_UPDATED_DATA:{
            return {...state,PersonalData:payload}
        }
      
        default : return state
    }
   
}