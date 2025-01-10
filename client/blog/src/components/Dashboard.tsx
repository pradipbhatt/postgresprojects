import Articles from './Articles';
import Navbar from './Navbar';
const Dashboard = () => {
  return (
   <>
   <Navbar />
    <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold">Welcome to the Dashboard!</h1>
      <p className="mt-4">This is your personalized dashboard.</p>
    </div>
    <Articles/>
   </>
  );
};

export default Dashboard;
