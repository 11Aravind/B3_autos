import { useState } from 'react'
import './App.css'
import { AllRoutes } from './Routes'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import HsrpButton from './Components/Button/HsrpButton'

function App() {


  return (
    <>
      <Menu />
      <AllRoutes />
      <HsrpButton/>
      <Footer />
    </>
  )
}

export default App
