import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextUtils from './components/TextUtils';


function App() {



  return (
    <>
      <Navbar title={'TextUtils'} about={'About'} />
      <div className='container '>
        {/* <TextUtils heading="Enter text here" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
