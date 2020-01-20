export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export const receiveQuestions = (questions) =>{ return{type:RECEIVE_QUESTIONS,questions}}

export const saveQuestion = (question)=>{
    return {
        type:SAVE_QUESTION,
        question
    }
}

export const saveAnswer = (answer) =>{
    return {
        type:SAVE_ANSWER,
        answer
    }
}
