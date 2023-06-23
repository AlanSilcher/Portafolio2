import { Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects/Projects';
import Solutions from "./Pages/Solutions/Solutions"
import Technologies from './Pages/Technologies/Technologies';
import Certifications from './Pages/Certifications/Certifications';
import Contact from './Pages/Contact/Contact';
import Reviews from './Pages/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Me from './Pages/Me/Me';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/me" element={<Me />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
