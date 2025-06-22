import { useState } from 'react'
import './App.css'
import { AllRoutes } from './Routes'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import HsrpButton from './Components/Button/HsrpButton'
import { useLocation } from 'react-router-dom'

function App() {
const {pathname}=useLocation()
  return (
    <>
      <Menu />
      <AllRoutes />
    {!pathname?.includes("/bookHSRP") &&  <HsrpButton/>} 
      <Footer />
    </>
  )
}

export default App
