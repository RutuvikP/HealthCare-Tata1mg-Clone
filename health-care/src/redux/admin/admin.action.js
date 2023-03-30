import * as types from "./admin.actionTypes";
import { getMultivitaminsAPI } from "./admin.api";

// GET_ACTIONS

export const getMultivitaminsData=()=>async(dispatch)=>{
    dispatch({type:types.PRODUCTS_LOADING})
    try {
        let data= await getMultivitaminsAPI();
        dispatch({type:types.GET_MULTIVITAMINS_PRODUCTS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:types.PRODUCTS_ERROR}); 
    }
}