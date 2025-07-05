import { useState } from 'react'
import './App.css'
import { AllRoutes } from './Routes'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import HsrpButton from './Components/Button/HsrpButton'
import { useLocation } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

function App() {
const {pathname}=useLocation()
  return (
    <main style={{ paddingTop: '10vh' }}>
      <ScrollToTop/>
      <Menu />
      <AllRoutes />
    {!pathname?.includes("/bookHSRP") &&  <HsrpButton/>} 
      <Footer />
    </main>
  )
}

export default App
