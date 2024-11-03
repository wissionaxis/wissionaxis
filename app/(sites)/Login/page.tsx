'use client'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react';
import {useState} from 'react'
import { FaBullseye } from 'react-icons/fa6';
import {useRouter} from 'next/navigation';
  
const LoginPage = () => {
  const router = useRouter()
  const [formData , setformData] = useState({
    email : '',
    password : ''
  });
const [errors , setErrors] = useState<{[key : string] : string}>({});

const change = (event : React.ChangeEvent<HTMLInputElement>) => {
const {name , value} = event.target;
setformData({
  ...formData,
  [event.target.name] : event.target.value
});
}

const handleGoogle = async () => {
  await signIn("google");
  router.push('/');
}

const validation = () => {
const inputErrors: { [key: string]: string } = {};
if(!formData.email){
  inputErrors.email = 'EmailId required!'
}
else if(!/\S+@\S+.\S/.test(formData.email)){
  inputErrors.email = 'Invalid EmailId';
}
if(!formData.password){
  inputErrors.password = 'Password is required'
}
setErrors(inputErrors);
return Object.keys(inputErrors).length === 0;
}

const onSubmitOfForm = async (event : React.FormEvent) => 
{
event.preventDefault();
if(!validation())
{
  console.log("Faulty Inputs"); 
}
else
{
  event.preventDefault();
  try{
  const response = await signIn("credentials",{...formData,redirect: false});
  console.log(response?.status);
  if(response?.status == 200)
  {
    router.push('/');
  }
  }
  catch(e){
  console.log(e);
  }
}
}
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back!!</h2>
          <p className="mb-4 text-center">Continue with Google or enter your details.</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center w-full mb-4"  onClick={(handleGoogle)}>
            <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.2 0 6.2 1.2 8.4 3.3l6.2-6.2C34.8 3.3 29.7 1 24 1 14.3 1 6.2 7.3 2.6 15.8l7.3 5.6C12.3 15.7 17.6 9.5 24 9.5z" />
              <path fill="#34A853" d="M24 46c6.1 0 11.1-2 14.8-5.3l-7.1-5.5c-2.1 1.4-4.8 2.3-7.7 2.3-5.8 0-10.7-3.9-12.5-9.2L2.4 32.1C6 40.7 14.8 46 24 46z" />
              <path fill="#FBBC05" d="M46.6 24.3c0-1.5-.1-2.9-.4-4.3H24v8.6h12.7c-.6 3-2.3 5.5-4.9 7.2l7.1 5.5C42.4 37.6 46.6 31.4 46.6 24.3z" />
              <path fill="#EA4335" d="M9.9 28.2c-1.1-3-1.1-6.3 0-9.3l-7.3-5.6C.3 17.6 0 20.8 0 24s.3 6.4 1.6 9.5l7.3-5.6z" />
            </svg>
            Login with Google
            </button>
          <form className="mb-4" method = "post" onSubmit={onSubmitOfForm}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor='email'>Email</label>
              <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id = "email" name = "email" value = {formData.email} onChange = {change} required/>
              {errors.email ? <p className="text-red-500 text-sm">{errors.email}</p> : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor='password'>Password</label>
              <input type="password" placeholder="******" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id = "password" name = "password" value = {formData.password} onChange = {change} required />
              {errors.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}
              <Link href="#" className="text-blue-500 text-sm float-right my-3">Forgot password?</Link>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg" type = "submit">Login</button>
          </form>
          <div className="text-center">
            <p className="mb-4 ">
              Dont have an account? <a href="/register" className="text-blue-500">Sign Up for free</a>
            </p>
            <p>
              <a href="#" className="text-gray-500">Skip for now →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
   
    </>
    
  );
};

export default LoginPage;
