import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ServicesSection from './components/Servicessection.jsx'
import Destinations from './components/Destinations.jsx'
import BookingSection from './components/BookingSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import SubscribeSection from './components/SubscribeSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <Destinations />
      <BookingSection />
      <TestimonialSection />
      <SubscribeSection />
      <Footer />
  </>
  )
}

export default App
