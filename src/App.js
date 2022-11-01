import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textforms from "./components/Textforms";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import { Home } from "./components/Home";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  return (
    <>
    <Router>

      <Navbar title="TextUtil" />

      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route path="/" element={ <Textforms heading="Enter text to analyze" showAlert={showAlert} />} />
        <Route path="about" element={ <About/> } />
        <Route path="home" element={ <Home/> } />
      </Routes>
      </div>
    </Router>
        
    </>
  );
}
export default App;
