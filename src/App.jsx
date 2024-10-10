import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
function App() {
  return (
<div className="w-full min-h-screen  text-white  bg-zinc-900 ">


     <Navbar></Navbar>
     <Landingpage/>
     <Marquee></Marquee>
     {/* <Marquee></Marquee> */}
     
</div>
  )
} 

export default App
