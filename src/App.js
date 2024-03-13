
import './App.css';
import Navbarr from './components/Navbarr/Navbarr';

import Gallery from './pages/gallery/page'
import Home from './pages/home/page'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <div className="App">

      <Router>
        
        <Navbarr />
       <Routes>
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/"        element={<Home />} />
        </Routes>
              
        </Router>
      
      
    </div>
    
  );
}

export default App;
