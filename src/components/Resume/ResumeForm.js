import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Button from './Button'
import CompletedResume from './CompletedResume'

class ResumeForm extends Component {
    constructor(props){
        super(props);

        this.state = { 
           resumeInfo: {
              completed: false
           }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            resumeInfo: {
                completed: true
            }
        })
        console.log(' Submit was attempted ')
    }

    render(){
        const { resumeInfo } = this.state
        if(resumeInfo.completed === true){
           return(<CompletedResume resumeInfo={resumeInfo} {...this.state} />)
        } else {
        return(
            <div className="ResumeForm">
                <form onSubmit={this.onSubmit} action='' className="ui form segment">
                    <h2 className="ui large header">Personal Information</h2>
                    <GeneralInfo resumeInfo={resumeInfo} onChange={this.onChange}/>
                    <h2 className="ui large header">Work Experience</h2>
                    <WorkExperience onChange={this.onChange} />
                    <h2 className="ui large header">Education</h2>
                    <Education onChange={this.onChange} />
                    <Button />
                </form>
            </div>
        )
    }
}
      
}

export default ResumeForm