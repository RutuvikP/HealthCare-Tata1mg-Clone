import { ADMIN_EDIT_PRODUCT_SUCCESS, ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    adminAuth:false,
    products:[]
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADMIN_PRODUCT_REQUEST: return {...state,isLoading:true}
        case ADMIN_PRODUCT_FAILURE: return {...state,isLoading:false,isError:true}
        case ADMIN_PRODUCT_SUCCESS: return {...state,isLoading:false, products:payload}
        case ADMIN_EDIT_PRODUCT_SUCCESS: return {...state,isLoading:false}
        default: return state
    }
}