import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../components/Home'
import CardSection from '../components/CardSection'
import Example from '../components/Example'
import './App.css'
const App = () => {
  return (
    
      <div className="min-h-screen flex flex-col">

        <Navbar/>
        <Home/>
         <CardSection/> 
         <Example/>
        <Footer/>
      </div>
  )
}

export default App