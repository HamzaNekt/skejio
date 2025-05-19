import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesIntro from "./components/FeaturesIntro";
import FeaturesGrid from "./components/FeaturesGrid";
import RedefineSection from "./components/RedefineSection";
import NetworkingSection from "./components/NetworkingSection";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const Home = () => (
  <>
    <Hero />
    <FeaturesIntro />
    <FeaturesGrid />
    <RedefineSection />
    <NetworkingSection />
    <FeatureCards />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App; 