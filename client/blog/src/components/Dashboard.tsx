
import { FaMicrophone, FaUpload, FaPaperPlane } from 'react-icons/fa';
import Navbar from './Navbar';
import Articles from './Articles';
import Footer from './Footer';

const Dashboard = () => {
  return (
   <>
   <Navbar />
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#e5ecfc]">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
      Think Smart & Learn Smarter With <span className="text-primary">SOEIntel</span>
      </h1>

      {/* Input Bar */}
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          placeholder="Upload pdf, pptx, articles or paste youtube videos"
          className="w-full pl-14 pr-12 py-4 rounded-full border-2 border-blue-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
        
        {/* Left Icon (Microphone) */}
        <FaMicrophone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl cursor-pointer" />
        
        {/* Right Icons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-3">
          <FaUpload className="text-primary text-xl cursor-pointer hover:scale-110 transition-transform" />
          <FaPaperPlane className="text-primary text-xl cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Supported Formats */}
      <p className="text-sm text-gray-500 mt-4">
        Supported Format: PDF, PPTX, TXT, JPEG or YouTube Videos
      </p>
    </div>
    <Articles/>
    <Footer/>
   </>
  );
};

export default Dashboard;
