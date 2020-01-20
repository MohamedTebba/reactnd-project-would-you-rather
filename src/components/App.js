import React from 'react';
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import {Swipeable,useSwipeable} from 'react-swipeable'
import Login from './Login'
import Dashboard from './Dashboard'
import Nav from './Nav'
import PollView from './PollView'
import Panel from './Panel'
import AnswerCard from './AnswerCard'
import {handleInitialUsers,handleInitialQuestions} from '../actions/shared'
import '../styles/app.css'



class App extends React.Component{

  
 
  componentDidMount(){

    // const vh = window.innerHeight *0.01
    // document.documentElement.style.setProperty('--vh',`${vh}px`)
    
    // window.addEventListener('resize',()=>{
    //   const vh = window.innerHeight *0.01
    //   document.documentElement.style.setProperty('--vh',`${vh}px`)
      
    // })
    
    this.props.dispatch(handleInitialUsers())
    this.props.dispatch(handleInitialQuestions())
    
    
  }
  
  swipedLeft = (e)=> {
    const nav = document.getElementsByTagName('NAV')
    if(e.dir === 'Right')
    Array.from(nav)[0].classList.add('nav--swipe-right')
    if(e.dir === 'Left') 
    Array.from(nav)[0].classList.remove('nav--swipe-right')
    
  }
    
  
  render(){

    document.addEventListener('click',(e)=>{
      // e.preventDefault()
      console.log('u clicked me')
      const nav = document.getElementsByTagName('NAV')
      nav.length!==0 && Array.from(nav)[0].classList.remove('nav--swipe-right')
    },false)
    
      return (
        
        <Switch>
        
        <Route exact path='/' render={(props)=>(
          
          <Login {...props} />
          )}/>
          
          <Swipeable onSwiped={(eventData)=>this.swipedLeft(eventData)} >
          <Route path='/:id'
          render={(props)=>(  
            <React.Fragment>
            
            
            <Nav {...props} />
            
            <Route exact path="/:id/(answers)?">
            <Panel {...props}/>
            </Route>
            <Dashboard {...props} />
            <Switch>
            
            <Route exact path={`${props.match.path}/:questionID`}
             render={(props)=>(
               <PollView {...props}/>
               )}
            />

            <Route path={`${props.match.path}/:result`}
            render={(props)=>(
              <AnswerCard {...props} />
            )}
            />
            </Switch>
            
            </React.Fragment>
            
            )}
            />
            </Swipeable>
        
      </Switch>
     
    )
  }
}



export default connect((state)=>{return{...state}})(App);
