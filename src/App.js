import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar title="{3}" aboutText="About Us"/> */}
      <Navbar />
      {/* <div className='container'>
        <TextForm title='Enter the text' />
      </div> */}
      <About title='About Page'/>


    </>
  );
}

export default App;
