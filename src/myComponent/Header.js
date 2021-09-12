import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Header(props) {

  let headerstyle={
    width:"100%"
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed" style={headerstyle}>
      <div className="container-fluid  justify-content-center">
        <Link className="navbar-brand " to="/">{props.title}</Link>
      </div>
    </nav>

  )
}
