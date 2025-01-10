import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(false); // State for the terms and conditions checkbox
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      setErrorMessage('You must agree to the terms and conditions.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login/', {
        email,
        password,
      });

      console.log('Login successful, response:', response.data);

      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
      console.log('Token set in localStorage');

      // Optionally, you can store other response data as needed:
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      console.log('User data set in localStorage');

      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (error: any) {
      console.log('Login failed, error:', error.response?.data);
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md bg-light">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <a href="/terms" className="text-blue-500 hover:underline">Terms and Conditions</a>.
          </label>
        </div>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-primary hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
