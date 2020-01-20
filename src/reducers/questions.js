import {RECEIVE_QUESTIONS} from '../actions/questions'
import {RECEIVE_DATA} from '../actions/recievedata'

export default function questions (state = {}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case RECEIVE_DATA :
            return {
                ...state,
                ...action.questions
            }    
            default :
            return state
    }
}