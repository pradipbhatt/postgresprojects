import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Adjust as per your authentication status
  const [isVisible, setIsVisible] = useState(true); // Controls navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY); // Track previous scroll position
  const navigate = useNavigate();

  // Toggle menu visibility for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout and redirection
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Profile button click handler
  const handleProfileClick = () => {
    navigate('/profile');
  };

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10); // Show if scrolling up or near top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-primary font-semibold">SOE Intel</h1>
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
              {isMenuOpen ? (
                <FaTimes className=" h-6 w-6 text-white" />
              ) : (
                <FaBars className=" h-6 w-6 text-white" />
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="flex items-center text-gray-900 hover:text-primary transition">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-900 hover:text-primary transition">
              <FaInfoCircle className="mr-2" /> About
            </Link>
            <Link to="/services" className="flex items-center text-gray-900 hover:text-primary transition">
              <FaServicestack className="mr-2" /> Services
            </Link>
            <Link to="/contact" className="flex items-center text-gray-900 hover:text-primary transition">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center text-gray-900 hover:text-primary transition"
                >
                  <FaUser className="mr-2" /> Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center text-gray-900 hover:text-primary transition">
                <FaUser className="mr-2" /> Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? '' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="flex items-center text-gray-900 hover:text-primary  transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-gray-900 hover:text-primary  transition">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/services" className="flex items-center text-gray-900 hover:text-primary  transition">
            <FaServicestack className="mr-2" /> Services
          </Link>
          <Link to="/contact" className="flex items-center text-gray-900 hover:text-primary  transition">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleProfileClick}
                className="flex items-center text-gray-900 hover:text-primary  transition"
              >
                <FaUser className="mr-2" /> Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center text-gray-900 hover:text-primary  transition">
              <FaUser className="mr-2" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
