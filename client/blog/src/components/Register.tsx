import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('pradipbhatt.cse@fwu.edu.np');
  const [password, setPassword] = useState('1111');
  const [designation, setDesignation] = useState('Software Engineer');
  const [empID, setEmpID] = useState('EMP03301');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log("Registration data:", {
      name,
      email,
      password,
      designation,
      empID,
    });
  
    try {
      const response = await axios.post('http://localhost:8080/api/register/', {
        name,
        email,
        password,
        designation,
        empID,
      });
  
      console.log("Registration successful:", response.data);
  
      // Redirect to login after successful registration
      navigate('/login');
    } catch (error: any) {
      console.error("Registration failed:", error);
  
      // Set error message
      setErrorMessage(error.response?.data?.message || 'Registration failed');
    }
  };
  

  const nextStep = () => {
    setErrorMessage(''); // Clear error message when moving to next step
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setErrorMessage(''); // Clear error message when moving to previous step
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        {step === 1 && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        {step === 2 && (
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
        )}

        {step === 3 && (
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
        )}

        {step === 4 && (
          <div className="mb-4">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              id="designation"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
        )}

        {step === 5 && (
          <div className="mb-4">
            <label htmlFor="empID" className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              id="empID"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your employee ID"
              value={empID}
              onChange={(e) => setEmpID(e.target.value)}
              required
            />
          </div>
        )}

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 5 ? (
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
