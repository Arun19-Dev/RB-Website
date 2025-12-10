import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SimpleHome from "./SimpleHome";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DriverPage from "./pages/DriverPage";
import MechanicPage from "./pages/MechanicPage";
import ReportIssue from "./pages/ReportIssue";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SimpleHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/drivers" element={<DriverPage />} />
            <Route path="/mechanics" element={<MechanicPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
