import { useEffect, useState } from "react";
import "./App.css";
import AboutUs from "./modules/About Us/AboutUs";
import ClientCarousel from "./modules/Client Carousel/ClientCarousel";
import Footer from "./modules/Footer/Footer";
import HeroCarousel from "./modules/Hero Carousel/HeroCarousel";
import ProductCarousel from "./modules/Product Carousel/ProductCarousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="overflow-hidden">
      {/* Pass heroData only if it exists */}
      <HeroCarousel />
      <AboutUs />
      <ClientCarousel />
      {/* <ProductCarousel /> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
