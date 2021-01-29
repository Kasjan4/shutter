import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import * as ReactBootStrap from 'react-bootstrap'





const Topics = () => {
  const [loading, setLoading] = useState(false)




  const delays = [200, 400, 600, 800]
  const topics = ['travel', 'food', 'automotive', 'aerial', 'nature', 'animals', 'sports', 'music', 'education', 'emotions', 'people', 'science', 'architecture', 'backgrounds', 'fasion']
  const images = [
    'https://i.imgur.com/suk3TJt.jpg',
    'https://i.imgur.com/kiPvLVX.jpg',
    'https://i.imgur.com/Y4KjXed.jpg',
    'https://i.imgur.com/lyXbY82.jpg',
    'https://i.imgur.com/p74OQjG.jpg',
    'https://i.imgur.com/63C7Nz0.jpg',
    'https://i.imgur.com/M31H3C2.jpg',
    'https://i.imgur.com/hnz8muZ.jpg',
    'https://i.imgur.com/r9weVxz.jpg',
    'https://i.imgur.com/83KKLJq.jpg',
    'https://i.imgur.com/htUmcAo.jpg',
    'https://i.imgur.com/ZEYHp6h.jpg',
    'https://i.imgur.com/zbJMh9l.jpg',
    'https://i.imgur.com/cYuuPRI.jpg',
    'https://i.imgur.com/2QURO95.jpg'
  ]



  console.log(loading)

  return <div className="topics" >



    {!loading && <div className="loader">
      <ReactBootStrap.Spinner style={{ color: '#d9ae7b', width: '5rem', height: '5rem' }} animation="grow" />
    </div>}



    <div className="topics-wrapper">

      {topics.map((topic, index) => {
        return <Link key={index} className={loading ? 'topic-wrapper' : 'topic-wrapper-none'} to={`/shutter/topic/${topic}`}>

          <Fade delay={delays[Math.round(Math.random() * 3)]}>
            <img className={loading ? 'topic-image' : 'topic-image-none'} onLoad={() => setLoading(true)} src={images[index]} />
          </Fade>

          <div className={loading ? 'topic-info' : 'topic-info-none'} >
            <p>{topic}</p>
          </div>

        </Link>

      })}

    </div>





  </div >

}

export default Topics