import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHome, FaServicestack, FaInfoCircle, FaAddressBook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#e5ecfc] text-[#1e1d22] py-10 mt-10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:bg-opacity-90 hover:backdrop-blur-md bg-gradient-to-br from-[#e5ecfc] to-[#5816ff00]">
            <h3 className="text-xl font-semibold mb-4 text-primary">About Us</h3>
            <p className="text-sm">
              SOE Intel is an AI-powered platform designed to provide personalized education for students at Far Western University, School of Engineering. Our mission is to empower learning through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:bg-opacity-90 hover:backdrop-blur-md bg-gradient-to-br from-[#e5ecfc] to-[#5d64c900]">
            <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition duration-300"><FaHome /> Home</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition duration-300"><FaServicestack /> Services</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition duration-300"><FaAddressBook /> Contact</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition duration-300"><FaInfoCircle /> About</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:bg-opacity-90 hover:backdrop-blur-md bg-gradient-to-br from-[#e5ecfc] to-[#5d64c900]">
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact Us</h3>
            <p className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:bhattsammar04@gmail.com" className="hover:text-primary transition duration-300">bhattsammar04@gmail.com</a></p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> <span className="hover:text-primary transition duration-300">+123 456 7890</span></p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Location: Far Western University, School of Engineering</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-[#2a2960] pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} SOE Intel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
