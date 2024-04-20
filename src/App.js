import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

//JSX import
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";


// CSS files import
import "./styles/App.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/contact.css"
import "./styles/footer.css"





// const stylesContext = require.context("./styles", true, /\.css$/);
// stylesContext.keys().forEach(stylesContext);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
