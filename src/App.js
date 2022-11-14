import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Beranda from './Component/Beranda'
import Hubungikami from './Component/Hubungikami'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Pantiasuhankita from './Component/Pantiasuhankita';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />}/>
           <Route path="/hubungikami" element={<Hubungikami />}/>
           <Route path="/pantiasuhankita" element={<Pantiasuhankita />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
