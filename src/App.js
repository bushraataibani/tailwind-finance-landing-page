import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Analytics from "./components/Analytics/Analytics";
import NewsLetter from "./components/NewsLetter/NewsLetter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
    </div>
  );
};

export default App;
