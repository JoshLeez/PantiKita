import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Beranda from './Component/Beranda'
import About from './Component/About'
import Status from './Component/Status'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Beranda />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/status" element={<Status />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
