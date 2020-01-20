import {_getUsers} from '../utils/_DATA'
import {_getQuestions} from '../utils/_DATA'
import {_saveQuestion} from '../utils/_DATA'
import {_saveQuestionAnswer} from '../utils/_DATA'
import {receiveUsers} from './users'
import {receiveQuestions,saveAnswer,saveQuestion} from './questions'

// import {setAuthedUser} from './autheduser'
// import {dispatch} from 'react-redux'

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

export const handleSaveQuestion = (question) => {
    return (dispatch) => {
        return _saveQuestion(question).then((res)=>{
            dispatch(saveQuestion(res))
        }).catch(()=>alert('An Error was occured! Try again.'))
    }
}

export const handleSaveAnswer = ({ authedUser, qid, answer }) => {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer }).then((res)=>{
            dispatch(saveAnswer(res))
        }).catch(()=>alert('An Error was occured! Try again.'))
    }
}
// export const handleAuthedUser = () => {
//    return (dispatch) => dispatch(setAuthedUser(AUTHED_ID))
// }