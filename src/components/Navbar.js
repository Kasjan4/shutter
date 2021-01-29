import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade'


const Navbar = (props) => {

  const logo = <FontAwesomeIcon icon={faCameraRetro} size="1x" />



  const [searchTerm, setSearchTerm] = useState('')

  const [option, setOption] = useState('photos')



  function handleSubmit(event) {
    event.preventDefault()

    if (option === 'photos') {
      props.history.push(`/shutter/photos/${searchTerm}`)
    }
    else if (option === 'videos') {
      props.history.push(`/shutter/videos/${searchTerm}`)
    }
  }


  console.log(option)

  return <nav className="navbar navbar-expand-md navbar-dark nav-background fixed-top">

    <Fade>
      <Link to="/shutter" className="title">{logo} SHUTTER</Link>
    </Fade>

    <Fade delay={200}>
      <form className="form-inline my-2 my-lg-0 search-bar" onSubmit={handleSubmit} >

        <input className="form-control mr-sm-2 search-input"
          type="search"
          placeholder={`Search ${option}`}
          aria-label="Search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />


        <select onChange={(event) => {
          setOption(event.target.value)
        }}>

          <option >photos</option>
          <option>videos</option>

        </select>

      </form>
    </Fade>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-right" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">






        <li className="nav-item">
          <Link to="/shutter/editorschoice" className="nav-link">EDITORS CHOICE</Link>
        </li>











      </ul>
    </div>

  </nav >

}


export default withRouter(Navbar)