import React, { Component } from 'react'
import nextId from "react-id-generator";
import GeneralInfo from './GeneralInfo'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Button from './Button'
import CompletedResume from './CompletedResume'
import '../styles/ResumeForm.css';


class ResumeForm extends Component {
    constructor(props){
        super(props);

        this.state = { 
           resumeInfo: {
              completed: false
           },
           numWorkSections: 1,
           numEducationSections: 1
           
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addWork = this.addWork.bind(this);
        this.deleteWork = this.deleteWork.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }
    nextId = nextId();
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
    }

    addWork(e) {
        e.preventDefault();
        this.setState({
            numWorkSections: this.state.numWorkSections + 1
        })
    }

    deleteWork(e){
        e.preventDefault();
        this.setState({
            numWorkSections: this.state.numWorkSections - 1
        })
    }

    addEducation(e){
        e.preventDefault();
        this.setState({
            numEducationSections: this.state.numEducationSections + 1
        })
    }

    deleteEducation(e){
        e.preventDefault();
        this.setState({
            numEducationSections: this.state.numEducationSections - 1
        })
    }

    render(){
        const addWorkChildren  = [];
        const addEducationChildren = [];
        const { resumeInfo, numWorkSections, numEducationSections } = this.state
        for (var i = 0; i < numWorkSections; i += 1){
            addWorkChildren.push(<WorkExperience id={nextId} onChange={this.onChange} />)
        }
        for (var x = 0; x < numEducationSections; x += 1){
            addEducationChildren.push(<Education onChange={this.onChange} />)
        }
        if(resumeInfo.completed === true){
           return(<CompletedResume resumeInfo={resumeInfo} {...this.state} />)
        } else {
        return(
            <div className="ResumeForm">
                <form onSubmit={this.onSubmit} action='' className="ui form segment">
                    <h2 className="ui large header">Personal Information</h2>
                    <GeneralInfo resumeInfo={resumeInfo} onChange={this.onChange}/>
                    <h2 className="ui large header">Work Experience</h2>
                        {addWorkChildren}
                    <Button onClick={this.addWork} sectionTitle='Add Work Experience' />
                    <Button onClick={this.deleteWork} sectionTitle='Delete Work Experience' />
                    <h2 className="ui large header">Education</h2>
                        {addEducationChildren}
                    <Button onClick={this.addEducation} sectionTitle='Add Education' />
                    <Button onClick={this.deleteEducation} sectionTitle='Delete Education' />
                    <br />
                    <br />
                    <Button onClick={this.onSubmit} sectionTitle='Submit' />
                </form>
            </div>
        )
    }
}
      
}

export default ResumeForm