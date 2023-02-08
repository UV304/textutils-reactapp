import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';

function App() {
  return (
    <>
      <Navbar title={'TextUtils'} about={'About'} />
      <div className='container '>
        <TextUtils />
      </div>
    </>
  );
}

export default App;
