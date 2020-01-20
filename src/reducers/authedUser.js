import {SET_AUTHED_USER} from '../actions/autheduser'

export default function authedUser (state = {}, action){
    switch(action.type){
        case SET_AUTHED_USER :
            return {
                ...state,
                id:action.id
            }
        default :
            return state    
    }
}