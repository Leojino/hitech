import React, { Component } from 'react'

class Header extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" role="button" style={{color: "white"}}>
                Hi-Tech Electricals
              </a>
            </nav>
        )
    }
}

export default Header;