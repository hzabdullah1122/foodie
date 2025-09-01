import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Deliverd from "./components/Deliverd";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Food from "./pages/Food";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Order />
              <Deliverd />
              <Customer />
              <Footer />
            </>
          }
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </Router>
  );
}

export default App;
