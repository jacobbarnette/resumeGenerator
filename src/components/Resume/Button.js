import React, { Component } from 'react'

class AddInfoBtn extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.onClick} className="ui primary button">{this.props.sectionTitle}</button>
        )
    }
}

export default AddInfoBtn