import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import PageTransition from "./components/PageTransition";

const Home = () => (
  <PageTransition>
    <Hero />
    <FeaturesIntro />
    <FeaturesGrid />
    <RedefineSection />
    <NetworkingSection />
    <FeatureCards />
  </PageTransition>
);

// Composant pour gérer le scroll vers le haut lors de la navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Composant principal qui utilise useLocation
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="bg-black min-h-screen w-full">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

// Wrapper pour BrowserRouter
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App; 