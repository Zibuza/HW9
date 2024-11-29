import { useState } from 'react'
import './App.css'
import Timer from "./components/Timer/Timer"
import ImageComponent from "./components/ImageConponent/Image"
import VideoComponent from "./components/Video/Video"
function App() {
  

  return (
    <>
      <Timer />
      <ImageComponent />
      <VideoComponent />  
    </>
  )
}

export default App
