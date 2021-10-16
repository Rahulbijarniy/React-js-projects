import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
  <Link className="navbar-brand" to="#">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
      </li>
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
       <input className="form-check-input" onClick={props.toggleMode} type="checkbox" style={{height:'25px', width:'23px'}} id="flexSwitchCheckDefault"/>
       <label className="form-check-label" style={{margin:'0 8px', fontSize:'24px'}} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
         </div>
     </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {title: PropTypes.string}

