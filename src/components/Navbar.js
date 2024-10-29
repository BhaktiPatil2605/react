import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>

          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          {/* <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-info  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'info')}></button>
            <button type="button" className="btn btn-danger  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'danger')}></button>
            <button type="button" className="btn btn-success  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'success')}></button>
            <button type="button" className="btn btn-warning  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'warning')}></button>
            <button type="button" className="btn btn-dark  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'dark')}></button>
            <button type="button" className="btn btn-light  border border-1 border-dark mx-2" onClick={() => props.changeMode('color', 'light')}></button>

          </div> */}
          {/* ////////CODE WITH HARRY SOLUTION for COLOR SWITCH*/}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.changeMode('primary')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.changeMode('danger')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.changeMode('success')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.changeMode('warning')}} style={{height:'30px',width:'30px'}}></div>
            
          </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" id="mode" onClick={()=>{props.changeMode(null)}} />
            <label className="form-check-label" htmlFor="mode">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Add text here",
}

// ######### REGARDING PROPS ############
//is required is used when we want that props to be compulsory have some values in it
// default props are used when we didnt send any props with defined component then it used default props values
// or else what we send with component is used
// Basically props are used when in the component so that if the common  componenet is used multiple timesthen while just calling that component we can change the TITLE or other things by just passing the parameters of props according to our requirement
//it will give first priority to what we are values are we passing in props while calling the component , if it is missing then it will give priority to default value
// Props are just like properties which we can pass while calling the component and with the help of that properties our component will render the things in our website
