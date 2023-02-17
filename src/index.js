import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages.js/Home";
import About from "./Pages.js/About";
import Blog from "./Pages.js/Blog";
import Contact from "./Pages.js/Contact";
import Stylesheet from "./Pages.js/stylesheet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <App />
    <Stylesheet />
  </div>
);
