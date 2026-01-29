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

const Home = () => {
  return (
    <>
      <Hero />
      <div id="flights"><ServicesSection /></div>
      <div id="destinations"><Destinations /></div>
      <div id="bookings"><BookingSection /></div>
      <TestimonialSection />
      <div id="hotels"><SubscribeSection /></div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;