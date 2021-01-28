import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'





const Topic = (props) => {



  const topic = props.match.params.topic
  const dl = <FontAwesomeIcon icon={faDownload} size="1x" />
  const delays = [200, 400, 600, 800]

  const [photos, setPhotos] = useState([])


  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=17709445-39f19e5431043db22e3684797&q=${topic}&image_type=photo`)
      .then((resp) => {
        const photos = resp.data

        setPhotos(photos.hits)
      })

  }, [photos])

  




  return <div className="topic">

    


    {photos && <div className="photos-wrapper">

      {photos.map((photo, index) => {

        return <div className="card card-custom" key={index} >
          <Fade delay={delays[Math.round(Math.random() * 3)]}>
            <img className="card-img-top" src={photo.webformatURL} alt="Card image cap" />
          </Fade>
          <div className="card-body">
            <h5 className="card-title">by {photo.user}</h5>
            <a href={photo.largeImageURL} target="_blank" rel="noreferrer" className="btn-dl">{dl}</a>
          </div>
        </div>

      })}






    </div>}


    {photos && <h3 className="end-text" >You&apos;ve reached the end!</h3>}




  </div >

}

export default Topic