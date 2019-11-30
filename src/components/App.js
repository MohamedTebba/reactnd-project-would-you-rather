import React from 'react';
import {connect} from 'react-redux'
import {handleInitialUsers,handleInitialQuestions} from '../actions/shared'


class App extends React.Component{

  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
    this.props.dispatch(handleInitialQuestions())
    
  }
  
  render(){
    // console.log(this.props.myStore.getState())
    return (
      <div className='App'>
       <h1>Hello</h1>
       <ul>
        {
          Object.keys(this.props.users)
          .map(key=><li key={key}>{key}</li>)
        }
       </ul>
      </div>
    )
  }
}



export default connect((state)=>{return{...state}})(App);
