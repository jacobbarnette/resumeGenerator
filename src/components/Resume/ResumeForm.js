import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import WorkExperience from './WorkExperience'
import Education from './Education'
class ResumeForm extends Component {
    constructor(props){
        super(props);

        this.state = {
           
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
           
        })
        console.log(this.state);
    }

    render(){
        const { generalInfo } = this.state
        return(
            <div className="ResumeForm">
                <form action='' className="ui form">
                    <h2 className="ui large header">Personal Information</h2>
                    <GeneralInfo generalInfo={generalInfo} onChange={this.onChange}/>
                    <h2 className="ui large header">Work Experience</h2>
                    <WorkExperience />
                    <h2 className="ui large header">Education</h2>
                    <Education />
                </form>
            </div>
        )
    }
      
}

export default ResumeForm