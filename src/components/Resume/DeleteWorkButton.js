import React, { Component } from 'react'

class DeleteWorkButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.deleteWork} className="ui danger button">Delete {this.props.sectionTitle}</button>
        )
    }
}

export default DeleteWorkButton