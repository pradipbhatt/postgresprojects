import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';  // Import the NotFound component
import Profile from './components/Profile';  // Import the Profile component
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Articles from './components/Articles';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for Register page */}
          <Route path="/register" element={<Register />} />

          {/* Route for Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* profile */}
          <Route path="/profile" element={<Profile />} />
          {/* about */}
          {/* SErvices page */}
          <Route path="/services" element={<Services />} />
          {/* Contact page */}
          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />  {/* Display NotFound page for any unmatched routes */}

          {/* Route for Home page */}
          {/* ARticles routes */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/" element={<Login />} />  {/* Redirect to Login page if no path is provided */}
          <Route path="/about" element={<About/>} />  {/* Redirect to Login page if no path is provided */}

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />  {/* Display NotFound page for any unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
