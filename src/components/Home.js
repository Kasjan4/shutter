import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'






const Home = () => {






  return <div className="home" >





    <div className="welcome">

      <Fade right>

        <h1 className="intro">THE BEST FREE STOCK PHOTOS<br /> SHARED BY TALENTED CREATORS</h1>
      </Fade>

      <Fade left delay={200}>
        <p className="info" >Over 1.9 million+ high quality stock images, videos and music shared by our talented community.</p>
      </Fade>

      <Fade delay={400}>
        <Link to={'/topics'} className="btn btn-md btn-secondary btn-home">EXPLORE</Link>
      </Fade>

    </div>






  </div >

}

export default Home