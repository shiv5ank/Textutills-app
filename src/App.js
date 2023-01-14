import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Nabar';
import TextUtills from './components/TextUtills';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  const [setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [theme, setTheme] = useState('dark')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTheme('light');
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode('light');
      setTheme('dark');
      document.body.style.backgroundColor = "white"
    }
  }
  const [mode, setMode] = useState("light"); 


  return (
    <>
    <Router>
      <Navbar title="TextUtils" homepage="Home" currMode={mode} toggleMode={toggleMode} currTheme={theme} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextUtills showAlert={showAlert} heading="Enter the text to analyze below" currMode={mode} currTheme={theme} />}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;