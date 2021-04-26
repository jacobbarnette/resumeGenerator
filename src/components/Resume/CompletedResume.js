import React, { Component } from 'react'

class CompletedResume extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        
        return(<div>
                <div className="generalInfo">
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <p>{this.props.email}</p>
                    <p>{this.props.tel}</p>
                </div>
                <div className="workExperience">
                    <h2>Work Experience</h2>
                    <p>{this.props.companyName}</p>
                    <p>{this.props.startDate}</p>
                    <p>{this.props.endDate}</p>
                    <p>{this.props.jobTitle}</p>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <p>{this.props.universityName}</p>
                    <p>{this.props.collegeStartDate}</p>
                    <p>{this.props.collegeEndDate}</p>
                    <p>{this.props.degree}</p>
                </div>
            </div>)
    }
}
export default CompletedResume