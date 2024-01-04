import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CardViewerInfo from './Components/Cards/CardViewerInfo'
import CardViewer from './Components/Cards/CardViewer'
import FristPage from './Pages/Home/HomePage'
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
    <div id="main" className='w-full h-full relative '>

      <Header/>
      <Outlet/>
      <Footer/>
      
  
    </div>
    </>
  )
}

export default App
