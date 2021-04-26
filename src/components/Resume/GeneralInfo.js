import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        return(
            <div className="GeneralInfo">
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                        onChange={this.props.onChange}
                        value={this.props.firstName}
                        placeholder='First Name' 
                        type="text" 
                        name='firstName'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor=""> 
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.lastName}
                        placeholder='Last Name' 
                        type="text" 
                        name='lastName'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.email}
                        placeholder='Email' 
                        type="email"
                        name='email'/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input 
                         onChange={this.props.onChange}
                         value={this.props.tel}
                        placeholder='Phone Number' 
                        type="tel"
                        name='tel'/>
                    </label>
                </div>
            </div>
            
        )
    }
}

export default GeneralInfo

