import Navbar from "./Navbar";

const NotFound = () => {
  return (
   <>
   <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#2507ac]">404</h1>
        <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
      </div>
    </div>
   </>
  );
};

export default NotFound;
