import React from 'react'
import Header from './Header.js'
import './App.css'
import Menu from './Menu'
import Company from './About-company.js'
import Team from './Team.js'
import Prices from './Prices.js'
import Contact from './Contact.js'

const App = () => {
  return (
    <>
      <Menu />
      <Header/>
    <Company/>
      <Team/>
      <Prices/>
     <Contact/>
    </>
  )

}

export default App