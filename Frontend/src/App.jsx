import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ServicesSection from "./components/Servicessection.jsx";
import Destinations from "./components/Destinations.jsx";
import BookingSection from "./components/BookingSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import SubscribeSection from "./components/SubscribeSection.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<ServicesSection />} />
        <Route path="/" element={<Destinations />} />
        <Route path="/" element={<BookingSection />} />
        <Route path="/" element={<TestimonialSection />} />
        <Route path="/" element={<SubscribeSection />} />
        <Route path="/" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
