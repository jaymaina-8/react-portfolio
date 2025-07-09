import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/projects"; // ✅ Capitalized filename for convention
import Contact from "./pages/Contacts";   // ✅ Capitalized filename for convention
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
