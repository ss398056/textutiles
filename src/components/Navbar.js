import React from 'react'
import {Link} from 'react-router-dom' 


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="rounded mx-2" onClick={()=>props.toggleBgColor('#d5eddc')} style={{height:'30px', width:'30px', backgroundColor:'#d5eddc'}} ></div>
              <div className="rounded mx-2" onClick={()=>props.toggleBgColor('#bbaffa')} style={{height:'30px', width:'30px', backgroundColor:'#bbaffa'}} ></div>
              <div className="rounded mx-2" onClick={()=>props.toggleBgColor('#f4f5da')} style={{height:'30px', width:'30px', backgroundColor:'#f4f5da'}}></div>
              <div className="rounded mx-2" onClick={()=>props.toggleBgColor('#f5daed')} style={{height:'30px', width:'30px', backgroundColor:'#f5daed'}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable':'Disable'} Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
