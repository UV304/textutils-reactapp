import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#030823'
      showAlert('Dark Mode is Enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is Enabled', 'success')
    }
  }

  return (
    <>
      <Navbar title={'TextUtils'} about={'About'} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container '>
        <TextForms heading="Enter text here" mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
