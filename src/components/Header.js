import React, { Component } from 'react'
import { FaFileAlt } from "react-icons/fa";
import './styles/Header.css';


class Header extends Component{
    render(){
        return(
            <header className="Header">
                <h1 className="headerText ui huge header"> <FaFileAlt /> Resume Generator</h1>
            </header>
        )
    }
}
export default Header
