"use client";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Model from '@/app/components/effects/Model';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [formData, setformData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
  const text: string[] = ["Sign", isLogin ? "In" : "Up", "or", "Join", "Our", "Pioneer", "Network"]
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleGoogle = async () => {
    await signIn("google");
    router.push('/');
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
    if (!formData.confirmpassword && !isLogin) {
      inputErrors.confirmpassword = 'Enter your Password for Confirmation!'
    }
    else if (formData.password != formData.confirmpassword && !isLogin) {
      inputErrors.confirmpassword = 'Re-Enter your Password for Confirmation'
    }
    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  }

  const onSubmitOfForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validation()) {
      console.log("Faulty Inputs");
    }
    else {
      try {
        if (isLogin) {
          const loginData = {
            email: formData.email,
            password: formData.password,
          }
          const response = await signIn("credentials", { ...loginData, redirect: false });
          console.log(response?.status);
          if (response?.status == 200) {
            router.push('/');
          }
        } else {
          const response = await axios.post("/api/register", formData);
          console.log(response?.data);
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="min-h-screen flex relative max-md:flex-col overflow-hidden">
      <Model />
      <div className="md:w-1/2 flex justify-center max-md:h-[40vh] h-screen gap-3 items-center relative ">
        <div className="h-1/2 relative w-5/6  max-sm:-mt-10">
          <div className="relative h-14 flex -mt-5">
            <span
              className='cursor-pointer hover:bg-black opacity-80 spanArrow
            transition-all relative w-14 h-full flex-center selection:bg-none rounded-full'
              onClick={() => { window.history.back() }}
            >
              <MoveLeft className=" opacity-60 arrowIcon" size={30} />
            </span>
          </div>
          <div className="relative mt-4">
            <p className="lg:text-7xl md:text-5xl max-md:text-3xl uppercase leading-[80px] font-semibold flex flex-wrap gap-2">
              {text.map((word, index) => (
                <span
                  key={index}
                  className="grpHover "
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
          <div className="relative mt-10">
            <p>Connect with like-minded professionals and Participate in industry events and conferences to expand your network.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 border-gray-400">
        <div className="max-w-md w-full relative">
          <h1 className="text-3xl font-bold mb-1">{isLogin ? 'Login' : 'Register'}</h1>
          <p className='mb-10'>Join the community and connect with peers.</p>
          <form className="space-y-4" onSubmit={onSubmitOfForm} method='post'>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={change} className="mt-1 p-2 block w-full border-none outline-none  rounded-md" required />
              {errors.email ? <p className="text-red-500 text-sm">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={change} className="mt-1 p-2 block w-full border-none outline-none rounded-md" required />
              {errors.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}
            </div>
            {
              !isLogin &&
              <div>
                <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={change} className="mt-1 p-2 block w-full border-none outline-none  rounded-md" required />
                {errors.confirmpassword ? <p className="text-red-500 text-sm">{errors.confirmpassword}</p> : null}
              </div>
            }
            <p className="mt-4 text-center text-sm text-gray-600">
              {!isLogin ?
                <>Already have an account? <span onClick={() => setIsLogin(true)} className="text-[#3560B3] cursor-pointer">Log in</span></>
                :
                <>Dont have an account? <span onClick={() => setIsLogin(false)} className="text-[#3560B3] cursor-pointer">Sign Up for free</span></>
              }
            </p>
            <button type="submit" className="w-full py-2 px-4 bg-[#3560B3] text-white rounded-md">
              {isLogin ? 'Log in' : 'Sign up'}

            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={handleGoogle}
              className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white border border-[#3560B3] text- rounded-md flex-center"
            >
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-6 h-6 mr-2" />
              {isLogin ? 'Log in' : 'Sign up'} with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
