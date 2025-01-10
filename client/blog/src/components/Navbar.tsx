import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Adjust as per your authentication status
  const navigate = useNavigate(); // Initialize the navigate hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Add your logout functionality here (e.g., clear session or token)
    setIsLoggedIn(false);

    // Redirect to login page
    navigate('/login');
  };

  const handleProfileClick = () => {
    // Navigate to the profile page
    navigate('/profile');
  };

  return (
    <nav className="bg-[#e5ecfc] text-[#1e1d22] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-primary font-semibold">MyApp</h1>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="block h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/dashboard" className="flex items-center text-gray-900 hover:text-white">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-900 hover:text-white">
              <FaInfoCircle className="mr-2" /> About
            </Link>
            <Link to="/services" className="flex items-center text-gray-900 hover:text-white">
              <FaServicestack className="mr-2" /> Services
            </Link>
            <Link to="/contact" className="flex items-center text-gray-900 hover:text-white">
              <FaEnvelope className="mr-2" /> Contact
            </Link>

            {/* Conditionally render Profile and Logout buttons if logged in */}
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleProfileClick} // Navigate to the profile page
                  className="flex items-center text-gray-900 hover:text-white"
                >
                  <FaUser className="mr-2" /> Profile
                </button>
                <button
                  onClick={handleLogout} // Logout and redirect to login page
                  className="flex items-center text-gray-900 hover:text-white"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center text-gray-900 hover:text-white">
                <FaUser className="mr-2" /> Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="flex items-center text-gray-900 hover:text-white block">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-gray-900 hover:text-white block">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/services" className="flex items-center text-gray-900 hover:text-white block">
            <FaServicestack className="mr-2" /> Services
          </Link>
          <Link to="/contact" className="flex items-center text-gray-900 hover:text-white block">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          <Link to="/profile" className="flex items-center text-gray-900 hover:text-white block">
            <FaUser className="mr-2" /> Profile
          </Link> {/* Mobile profile link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
