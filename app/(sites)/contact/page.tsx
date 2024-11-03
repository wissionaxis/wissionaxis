import React from 'react'

const Contact = () => {
  return (
    <section className="relative  w-full px-16 max-sm:p-5 mb-10 py-5 overflow-hidden">
      <div className="w-2/3 max-lg:w-full relative  mt-5 leading-10">
        <p className='font-normal uppercase leading-[7vh] max-lg:leading-10 max-md:text-2xl max-lg:text-3xl text-[2.5rem]'>
          (<span className='textColor'>Contact us</span>) → You have questions, comments or general Inquiries? We value your suggestions ● Drop us a line!
        </p>
      </div>
      <div className="flex justify-between w-full max-lg:flex-col  mt-10 ">
        <div className='lg:w-[40%] relative '>
          <p className='md:w-1/2 relative '>
            Fill the form below just to say hi or to send us any questions . Alternatively, you can reach us at abc@gmail.com
          </p>
        </div>
        <form className="relative lg:w-[40%] max-lg:mt-16 flex flex-col  md:mr-20">
          <input
            type="text"
            placeholder='YOUR Name'
            required
            className='outline-none placeholder:uppercase py-6 border-b border-gray-500 placeholder:text-black focus:placeholder:text-gray-400'
          />
          <input
            type="text"
            placeholder='YOUR Email'
            required
            className='outline-none placeholder:uppercase py-6 border-b mt-10 border-gray-500 placeholder:text-black focus:placeholder:text-gray-400'
          />
          <input
            type="text"
            placeholder='Your Message is about'
            required
            className='outline-none placeholder:uppercase py-6 border-b mt-10 border-gray-500 placeholder:text-black focus:placeholder:text-gray-400'
          />
          <button className='  py-1.5 w-max px-5 relative rounded-[20px] bg-black text-white flex-center mt-10'>
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact