import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'


import Home from './components/Home'

import Topics from './components/Topics'
import Topic from './components/Topic'

import Photos from './components/Photos'
import Videos from './components/Videos'
import EC from './components/EC'



import Navbar from './components/Navbar'



const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/shutter" component={Home} />
      <Route exact path="/shutter/topics" component={Topics} />
      <Route exact path="/shutter/editorschoice" component={EC} />
      <Route exact path="/shutter/topic/:topic" component={Topic} />
      <Route exact path="/shutter/photos/:term" component={Photos} />
      <Route exact path="/shutter/videos/:term" component={Videos} />

    </Switch>
  </BrowserRouter>
)

export default App