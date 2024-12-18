
import {REGISTER_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS} from "../actions/register"


const initialState ={
    loading:false,
    successMessage:"",
    error:'',
}

const registerReducer =(state=initialState,action)=>{
console.log("action ",action)
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,loading:true,successMessage:'',error:""
            }
        case REGISTER_SUCCESS:
            return{
                ...state,loading:false,successMessage:action.payload,
            }
        case REGISTER_FAILURE:
            return{
                ...state,loading:false,error:action.payload
            }
        default:
            return state
    }
   
}

export default registerReducer