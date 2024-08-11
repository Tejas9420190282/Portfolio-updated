import { useState } from 'react'

import './App.css'
import Hii from './component/Hii'
import About_me from './component/About_me'
import Experiance from './component/Experiance'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Last from './component/Last'
import Nav from './component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hii />
      <About_me />
      <Experiance />
      <Services />
      <Portfolio />
      <Contact />
      <Last />
      <Nav />
    </>
  )
}

export default App
