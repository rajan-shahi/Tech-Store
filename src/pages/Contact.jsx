const Contact = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex  w-full md:py-8  py-4 justify-center ">
        <div className=" flex flex-col  shadow-md shadow-slate-400 md:px-8 bg-gray-200  px-4 md:py-8 w-[400px]">
          <span className=" text-gray-700   font-bold py-1 cursor-pointer">
            First Name*
          </span>
          <input
            name="name"
            className="  p-2 rounded-full bg-gray-100 outline-orange-400 px-2 "
            type="text"
            placeholder=" Enter your first name........."
          />
          <span className=" font-bold  text-gray-700 py-1 cursor-pointer">
            Last Name*
          </span>
          <input
            name="name"
            className=" p-2 rounded-full outline-orange-400 px-2 "
            type="text"
            placeholder=" Enter your last name ........"
          />
          <span className=" font-bold   text-gray-700 p-1 cursor-pointer">
            Subject
          </span>
          <input
            name="subject"
            className=" p-2 rounded-full outline-orange-400 px-2  "
            type="text"
            placeholder=" subject ............"
          />
          <span className=" font-bold text-gray-700 py-1 cursor-pointer">
            Message
          </span>
          <textarea
            className=" h-40 rounded-2xl py-1 outline-orange-400 px-2 "
            placeholder=" message................"
            name="message"
            id=""
            cols="10"
            rows="10"
          ></textarea>
          <div className=" py-4 text-right">
            <button className="   text-gray-700  font-bold bg-green-400 hover:bg-orange-400 w-max px-6 py-2 rounded-full cursor-pointer ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;