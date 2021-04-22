import React, { Component } from 'react'
import { FaFileAlt } from "react-icons/fa";
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="Header">
                <h1 className="headerText ui huge header"> <FaFileAlt /> Resume Generator</h1>
            </div>
        )
    }
}
export default Header
