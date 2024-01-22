import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import About from './Components/About/About';
function App() {
  return (
    <>
    <div className='relative'>
      <Navbar/>
      <Main/>
      <About/>
    </div>
    </>
  )
}

export default App
