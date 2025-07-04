import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./css/App.css";
import { Provider } from "./components/ui/provider.jsx";
import Home from "./components/Home.js";
import Projects from "./components/Projects";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Avatar,
  Card,
} from "@chakra-ui/react";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider>
      <div>
        <nav className="navbar">
          <Link to="/" className="navTitle" onClick={() => setIsOpen(false)}>
            Beatriz
          </Link>
          <div className={`navLinks ${isOpen ? "open" : ""}`}>
            <Link
              to="/projects"
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/projects"
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              About me
            </Link>
            <a
              href="/cv.pdf"
              download="Beatriz_Rodrigues_CV"
              className="navLink"
            >
              <Button size="lg" rounded="full" className="btn">
                Get my CV!
              </Button>
            </a>
          </div>
        </nav>
        <div className="gridBackground"> </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
        </Routes>
        <footer></footer>
      </div>
    </Provider>
  );
}

export default App;
