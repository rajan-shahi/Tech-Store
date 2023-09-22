import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import about from "../assets/about.jpg";
import post02 from "../assets/post-02.jpg";
import post03 from "../assets/post-03.jpg";
const BlogSideBar = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" flex justify-start items-center py-6  px-56 gap-6 border-b-2 w-full">
        <div className=" flex justify-center items-center">
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Home
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Shop
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" border px-4 py-2 rounded-full text-sm text-gray-500 hover:bg-orange-400 hover:text-white cursor-pointer">
            Smartphones
          </h1>
        </div>
      </div>
      <div className=" flex  justify-center  gap-10 w-10/12 py-8">
        {/* left */}
        <div className=" flex flex-col gap-4 justify-center w-8/12">
          <div>
            <img className=" w-full h-[350px] rounded-lg" src={about} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              There are many variations of passages
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1 className=" cursor-pointer">2 Comments</h1>
            <h2 className=" cursor-pointer">February 20, 2017</h2>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div>
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div>
            <img className=" rounded-lg pt-10" src={post02} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              Many desktop publishing
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h2 className=" cursor-pointer">2 Comments</h2>
            <h1 className=" cursor-pointer">February 20, 2017</h1>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div>
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div>
            <img className=" rounded-lg pt-10" src={post03} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              Lorem Ipsum is simply dummy text
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1 className=" cursor-pointer">2 Comments</h1>
            <h2 className=" cursor-pointer"> February 20, 2017</h2>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div className=" pb-6">
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div className=" flex justify-center items-center gap-4 py-8 border-b-2 border-t-2">
            <span className=" text-gray-500">
              <HiOutlineArrowNarrowLeft size={20} />
            </span>
            <h1 className=" text-sm text-gray-500 cursor-pointer hover:text-orange-400">
              Prev Page
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              01
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              02
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              03
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              04
            </h1>
            <h1 className=" text-sm text-gray-500 cursor-pointer hover:text-orange-400">
              Next Page
            </h1>
            <span className=" text-gray-500">
              <HiOutlineArrowNarrowRight size={20} />
            </span>
          </div>
        </div>

        {/* right */}
        <div className=" flex flex-col gap-6  w-2/12">
          <div>
            <input
              className=" border bg-gray-200 py-2 px-2 rounded-full placeholder:text-sm outline-orange-400 w-[300px]"
              type="text"
              placeholder=" search"
            />
          </div>
          {/* colors */}
          <div className=" flex flex-col w-[300px] px-4">
            <div className=" flex w-[300px] items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 ">Colors</h1>
              <span className=" cursor-pointer">
                <AiOutlineMinus size={20} />
              </span>
            </div>
            <div className=" py-5">
              <input
                className=" border bg-gray-200 py-2 px-2 rounded-full placeholder:text-sm outline-orange-400 w-[300px]"
                type="text"
                placeholder=" colors search"
              />
            </div>
            <div className=" flex flex-col px-4">
              <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
                <h1 className=" text-xl text-gray-600 ">Categories</h1>
                <span className=" cursor-pointer">
                  <AiOutlineMinus size={20} />
                </span>
              </div>
              <div className=" flex flex-col gap-4 py-8 text-sm text-gray-500">
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Accessories (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Cameras (19)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Computers (56)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Laptops (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Networking (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Old Products (89)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Smartphones (90)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Software (23)
                </h1>
              </div>
            </div>
            <div>
              <h1>Latest Products</h1>
            </div>
            <div className=" grid grid-cols-2">
              <div>
                <h1>SmartPhone</h1>
              </div>
              <div>
                <h1>Cameras</h1>
              </div>
              <div>
                <h2>HeadPhones</h2>
              </div>
              <div>
                <h1>Musics</h1>
              </div>
              <div>
                <h1>Computers</h1>
              </div>
              <div>
                <h2>Laptops</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
