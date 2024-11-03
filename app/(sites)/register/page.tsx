"use client";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const RegisterPage: React.FC = () => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const validation = () => {
    const inputErrors: { [key: string]: string } = {};
    if (!formData.email) {
      inputErrors.email = 'EmailId required!'
    }
    else if (!/\S+@\S+.\S/.test(formData.email)) {
      inputErrors.email = 'Invalid EmailId';
    }
    if (!formData.password) {
      inputErrors.password = 'Password is required'
    }
    if (!formData.confirmpassword) {
      inputErrors.confirmpassword = 'Enter your Password for Confirmation!'
    }
    else if (formData.password != formData.confirmpassword) {
      inputErrors.confirmpassword = 'Re-Enter your Password for Confirmation'
    }
    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  }
  const onSubmitOfForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validation()) {
      console.log("Faulty Inputs");
    }
    else {
      try {
        const response = await axios.post("/api/register", formData);
        console.log(response?.data);
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div className="min-h-screen flex relative">
      <div className="w-1/2 flex justify-center h-screen gap-3 items-center relative borders">
        <div className="h-1/2 relative w-5/6">
          <div className="">Arrow</div>
          <div className="">
            <p className='text-7xl uppercase leading-[80px] font-bold'>Sign In or Join the Pioneer Community</p>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="space-y-4" onSubmit={onSubmitOfForm} method='post'>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={change} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
              {errors.email ? <p className="text-red-500 text-sm">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={change} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
              {errors.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={change} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
              {errors.confirmpassword ? <p className="text-red-500 text-sm">{errors.confirmpassword}</p> : null}
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
    </div>
  );
};

export default RegisterPage;
