import React, { Component } from 'react'
import ResumeForm from './Resume/ResumeForm'

class Main extends Component {
    constructor(props){
        super(props)
       
       
    }


   render(){
       return(
        <ResumeForm onSubmit={this.onSubmitTask} />
       )
     
   }
}

export default Main