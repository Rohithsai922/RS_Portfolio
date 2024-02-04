
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
        <Route path="/pages/contact" component={Contact} />
        <Route path="/pages/projects" component={Projects} />
        <Route path="/pages/gallery" component={Gallery} />
        <Route path="/pages/home" component={Home} />
        </Routes>
        </Router>
      
    
      
      
    </div>
    
  );
}

export default App;
