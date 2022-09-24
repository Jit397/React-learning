import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
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
      <Navbar mode={mode} title="Hello" toggleMode={toggleMode} aboutText="About Us" />
      {/* <Navbar /> */}
      {/* <div className='container'>
        <TextForm title='Enter the text' />
      </div> */}
      <About title='About Page' />


    </>
  );
}

export default App;
