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
      <Route exact path="/" component={Home} />
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/editorschoice" component={EC} />

      <Route exact path="/topic/:topic" component={Topic} />
      <Route exact path="/photos/:term" component={Photos} />
      <Route exact path="/videos/:term" component={Videos} />

    </Switch>
  </BrowserRouter>
)

export default App