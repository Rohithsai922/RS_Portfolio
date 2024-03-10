
import './App.css';
import Navbarr from './components/Navbarr/Navbarr';
import Contact from './pages/contact/page'
import Projects from './pages/projects/page'
import Gallery from './pages/gallery/page'
import Home from './pages/home/page'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <div className="App">

      <Router>
        
        <Navbarr />
       <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/"        element={<Home />} />
        </Routes>
              
        </Router>
      
      
    </div>
    
  );
}

export default App;
