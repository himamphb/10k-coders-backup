import { CREATE_USER, GET_USERS } from "../Actions/ActionsType"
import { defaultState } from "../defaultState"

export const usersReducer = (state=defaultState,action)=>{
    switch(action.type){
        case GET_USERS:
          return {...state,users:action.payload}
        // case CREATE_USER:
        //     return {...state,users:action.payload}
    
         default:
            return state
    }
}