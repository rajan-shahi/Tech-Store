import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex  w-full md:w-10/12 md:py-8  py-4 justify-center bg-gray-300">
        <div className=" flex flex-col  shadow-md shadow-slate-400 md:px-8  px-4 md:py-8 w-[400px]">
          <span className=" text-xl text-white py-1 cursor-pointer">First Name:</span>
          <input name="name"
            className="  p-2 rounded-full bg-gray-100 outline-orange-400 px-2 "
            type="text"
            placeholder=" Enter your first name........."
          />
          <span className=" text-xl  text-white py-1 cursor-pointer">Last Name:</span>
          <input name="name"
            className=" p-2 rounded-full outline-orange-400 px-2 "
            type="text"
            placeholder=" Enter your last name ........"
          />
          <span className=" text-xl  text-white p-1 cursor-pointer">Subject:</span>
          <input name="subject"
            className=" p-2 rounded-full outline-orange-400 px-2  "
            type="text"
            placeholder=" subject ............"
          />
          <span className=" text-xl text-white py-1 cursor-pointer">Message:</span>
          <textarea
            className=" h-40 rounded-2xl py-1 outline-orange-400 px-2 "
            placeholder=" message................"
            name="message"
            id=""
            cols="10"
            rows="10"
          ></textarea> 
          <div className=" py-4 text-right">
          <button className=" text-xl text-white bg-green-400 hover:bg-orange-400 w-max px-4 py-2 rounded-full cursor-pointer ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
