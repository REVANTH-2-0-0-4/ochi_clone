import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
function App() {
  return (
<div className="w-full min-h-screen  text-white  bg-zinc-900 ">


     <Navbar></Navbar>
     <Landingpage/>
     <Marquee></Marquee>
      <About></About>     
</div>
  )
} 

export default App
