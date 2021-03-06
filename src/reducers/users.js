import {RECEIVE_USERS} from '../actions/users'
import {RECEIVE_DATA} from '../actions/recievedata'

export default function users (state = {},action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case RECEIVE_DATA :
            return {
                ...state,
                ...action.users
            }    
            default :
            return state
    }
}