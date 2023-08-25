import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Analytics from "./components/Analytics/Analytics";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
