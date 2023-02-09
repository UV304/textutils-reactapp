import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#030823'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title={'TextUtils'} about={'About'} mode={mode} toggleMode={toggleMode} />
      <div className='container '>
        <TextUtils heading="Enter text here" mode={mode} toggleMode={toggleMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
