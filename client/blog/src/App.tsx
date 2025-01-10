import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Assuming Login.tsx is in the same directory
import Register from './components/Register';  // Assuming Register.tsx is in the same directory
import Dashboard from './components/Dashboard'; // Create Dashboard.tsx for the dashboard page

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for Register page */}
          <Route path="/register" element={<Register />} />

          {/* Route for Dashboard page (you can replace this with your actual dashboard) */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Redirect to Login if no route matches */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
