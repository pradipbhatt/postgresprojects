import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve token and user data from localStorage
    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');

    if (!storedToken) {
      // If no token is found, redirect to the login page
      navigate('/login');
    } else {
      setToken(storedToken);
      // Optionally, verify if the token is expired here
      // Example: jwtDecode(token).exp < Date.now() / 1000
    }

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData)); // Parse user data from localStorage
      setLoading(false);
    } else {
      setError('User data not found');
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear token and user data from localStorage on logout
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/login'); // Redirect to login after logout
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-primary">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 border bg-[#e5ecfc] border-gray-300 rounded-md shadow-md">
        {token && !error && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Profile</h2>
            <div className="mb-4">
              {userData?.profileImage && (
                <img
                  src={userData?.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
              )}
              <p><strong>Name:</strong> {userData?.name || 'N/A'}</p>
              <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
              <p><strong>Role:</strong> {userData?.role || 'N/A'}</p>
              {/* Add more fields as necessary */}
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-[#548bef] text-white py-2 rounded-md hover:bg-[#948bff"
            >
              Logout
            </button>
          </>
        )}
        {error && <p className="text-[#548bef] text-sm mt-2">{error}</p>}
      </div>
    </>
  );
};

export default Profile;
