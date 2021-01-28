import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'




const Videos = (props) => {


  const term = props.match.params.term
  const dl = <FontAwesomeIcon icon={faDownload} size="1x" />
  const delays = [200, 400, 600, 800]

  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState('1')


  useEffect(() => {
    axios.get(`https://pixabay.com/api/videos/?key=17709445-39f19e5431043db22e3684797&q=${term}&page=${page}`)
      .then((resp) => {
        const photos = resp.data

        setPhotos(photos.hits)
      })

  }, [term, page])


  function handlePage(event) {
    setPage(event.target.value)
    scrollToTop()
  }

  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  console.log(term)

  return <div className="search">


    {photos && <div className="photos-wrapper">

      {photos.map((photo, index) => {

        return <div className="card card-custom" key={index} >
          <Fade delay={delays[Math.round(Math.random() * 3)]}>
            <video key={photo.videos.tiny.url}width="100%" controls>
              <source src={photo.videos.tiny.url} type="video/mp4" />
                  Your browser does not support HTML video.
            </video>
          </Fade>
          <div className="card-body">
            <h5 className="card-title">by {photo.user}</h5>
            <a href={photo.videos.large.url} target="_blank" rel="noreferrer" className="btn-dl">{dl}</a>
          </div>
        </div>

      })}

    </div>}



    <div className="pages">

      <button className={page === '1' ? 'btn-page-active' : 'btn-page'} value="1" onClick={handlePage}>1</button>
      <button className={page === '2' ? 'btn-page-active' : 'btn-page'} value="2" onClick={handlePage}>2</button>
      <button className={page === '3' ? 'btn-page-active' : 'btn-page'} value="3" onClick={handlePage}>3</button>
      <button className={page === '4' ? 'btn-page-active' : 'btn-page'} value="4" onClick={handlePage}>4</button>
      <button className={page === '5' ? 'btn-page-active' : 'btn-page'} value="5" onClick={handlePage}>5</button>

    </div>




  </div >

}

export default Videos