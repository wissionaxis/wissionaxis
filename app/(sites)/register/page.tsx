import React from 'react';
// import { signInWithGoogle } from '../lib/firebase';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
          </p>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign up</button>
          </form>
          <div className="mt-4">
            <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-6 h-6 mr-2" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2  flex justify-center items-center">
        <div className=" w-[50%] h-[50vh]">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-protection-8876027-7271014.png?f=webp" alt="Decorative" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
