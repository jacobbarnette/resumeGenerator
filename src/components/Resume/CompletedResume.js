import React, { Component } from 'react'
import  '../styles/CompletedResume.css'

class CompletedResume extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        
        return(
        <div className='CompletedResume effect'>
                <div className="generalInfo">
                    <h1 className='header'>{this.props.firstName} {this.props.lastName}</h1>
                    <div className="emailTel">
                        <p>{this.props.email}</p>
                        <p>{this.props.tel}</p>
                    </div>
                </div>
                <hr/>
                <div className="sectionTitle workExperience">
                    <h2>Experience</h2>
                    <hr/>
                    <div className="section">
                    <p>{this.props.companyName}</p>
                        <div className="test">
                            <p>{this.props.startDate}</p>
                            <p>{this.props.endDate}</p>
                        </div>
                        </div>
                    <p className='jobTitle'>{this.props.jobTitle}</p>
                    <p>{this.props.jobDesc}</p>
                    
                    
                </div>
               <div className="sectionTitle education">
                    <h2>Education</h2>
                    <hr/>
                  <div className="section">
                    <p>{this.props.universityName}</p>
                    <div className="test">
                    <p>{this.props.collegeStartDate}</p>
                    <p>{this.props.collegeEndDate}</p>
                    </div>
                    </div>
                    <p>{this.props.degree}</p>
                  
                </div>
        </div>
        )
    }
}
export default CompletedResume