import React from 'react'
import { Link } from 'react-router'
import logo from "../images/logo.jpg"

const Hpage = () => {
  return (
    <div style={{position:"absolute", top:"2vh",left:"3vh"}}>
    <Link to="/"><img src={logo} alt="" /></Link>
    </div>
  )
}

export default Hpage