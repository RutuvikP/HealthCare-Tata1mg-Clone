import axios from "axios";

// GET_APIS

export const getMultivitaminsAPI=async()=>{
    let res= await axios.get(`https://poised-red-shrimp.cyclic.app/multivitamins`)
    return res.data;
}




