import {_getUsers} from '../utils/_DATA'
import {_getQuestions} from '../utils/_DATA'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
// import {setAuthedUser} from './autheduser'
// import {dispatch} from 'react-redux'

// const AUTHED_ID = 'sarahedo'

export const handleInitialUsers = () => {
    return (dispatch) => {
        return _getUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
        })
    }
}

export const handleInitialQuestions = () => {
    return (dispatch) => {
        return _getQuestions().then((questions)=>{
            dispatch(receiveQuestions(questions))
        })
    }
}