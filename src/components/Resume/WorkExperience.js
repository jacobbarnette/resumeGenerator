import React, { Component } from 'react'

class WorkExperience extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        return(
            <div className="WorkExperience">
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.companyName}
                        placeholder='Company Name' 
                        type="text" 
                        name='companyName'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.startDate}
                        
                        type="date" 
                        name='startDate'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.endDate}
                       
                        type="date"
                        name='endDate'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.jobTitle}
                        placeholder='Job Title'
                        type="text"
                        name='jobTitle'/>
                    </label>
                </div>
            </div>
            
        )
    }
}

export default WorkExperience