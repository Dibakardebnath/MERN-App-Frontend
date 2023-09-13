import { GET_DELETED_DATA, GET_PERSONAL_DATA, GET_PUBLIC_DATA, GET_UPDATED_DATA } from "./ActionType"

export const GetData=(payload)=>{
    return {type:GET_PUBLIC_DATA, payload:payload}
}

export const personalData=(payload)=>{
    return {type:GET_PERSONAL_DATA, payload:payload}
}

export const DeleteData=(payload)=>{
    // console.log(payload)
    return {type:GET_DELETED_DATA, payload:payload}
}

export const UpdateData=(payload)=>{
    return {type:GET_UPDATED_DATA,payload:payload}
}
