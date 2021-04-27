import React, { Component } from 'react'

class Education extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        return(
            <div className="Education">
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.universityName}
                        placeholder='University Name' 
                        type="text" 
                        name='universityName'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.collegeStartDate}
                        type="date" 
                        name='collegeStartDate'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.collegheEndDate}
                        type="date"
                        name='collegeEndDate'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.degree}
                        placeholder='Degree earned'
                        type="text"
                        name='degree'/>
                    </label>
                </div>
            </div>
            
        )
    }
}

export default Education