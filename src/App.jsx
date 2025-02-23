import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import './App.css'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
    </div>
  )
}

export default App
