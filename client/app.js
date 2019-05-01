import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import NavbarMobile from './components/navbar-mobile'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
