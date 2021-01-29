import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import BackgroundImageOnLoad from 'background-image-on-load';
import * as ReactBootStrap from 'react-bootstrap'






const Home = () => {


  const [bgIsLoaded, setBgIsLoaded] = useState(false)

  console.log(bgIsLoaded)

  return <div className={bgIsLoaded ? 'home' : 'home-none'}  >

    {!bgIsLoaded && <div className="loader">
      <ReactBootStrap.Spinner style={{ color: '#d9ae7b', width: '5rem', height: '5rem' }} animation="grow" />
    </div>}


    <BackgroundImageOnLoad
      src={'https://i.imgur.com/SarpfWL.jpg'}
      onLoadBg={() =>
        setBgIsLoaded(true)
      }
      onError={err => console.log('error', err)}
    />



    {bgIsLoaded && <div className="welcome">

      <Fade right>
        <h1 className="intro">THE BEST FREE STOCK PHOTOS<br /> SHARED BY TALENTED CREATORS</h1>
      </Fade>

      <Fade left delay={200}>
        <p className="info" >Over 1.9 million+ high quality stock images, videos and music shared by our talented community.</p>
      </Fade>

      <Fade delay={400}>
        <Link to={'/shutter/topics'} className="btn btn-md btn-secondary btn-home">EXPLORE</Link>
      </Fade>

    </div>}






  </div >

}

export default Home