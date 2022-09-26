import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }

  }
  return (
    <>
      <Router>
        <Navbar mode={mode} title="Hello" toggleMode={toggleMode} aboutText="About Us" />
        <Alert alert="Alert here" />
        {/* <Navbar /> */}
        <div className='container'>
          <Routes>
          <Route path="/about" element={<About title='About Page' />} />
          </Routes>
          <TextForm title='Enter the text' />
        </div>
      </Router>
    </>
  );
}

export default App;
