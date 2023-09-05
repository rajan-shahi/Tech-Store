import React from "react";
import One from "../assets/01.jpg";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/03.jpg";
import Four from "../assets/04.jpg";
import Seven from "../assets/07.jpg";
import Eighteen from "../assets/18.jpg";
import Seventeen from "../assets/17.jpg";
import Ninteen from "../assets/19.jpg";

const NewArrivals = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className="  w-10/12 grid grid-cols-5 gap-4 py-8">
        {products.map((product, index) => (
          <div key={index} className=" hover:border-2 p-3 hover:rounded-2xl ">
            <div className=" flex flex-col gap-3 py-12  items-center">
              <img 
                className=" cursor-pointer pb-4 h-28 "
                src={product.image }
                alt=""
              />
              <p className=" text-gray-300  ">{product.name}</p>
              <p className=" hover:text-orange-600 cursor-pointer text-sm text-gray-500">
                {product.model}
              </p>
              <p className=" hover:text-orange-600 cursor-pointer text-sm">
                {product.desc}
              </p>
              <p className=" text-orange-600 text-2xl cursor-pointer">
                {product.price}
              </p>
              <p>{product.card}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

const products = [
  {
    image: One,
    name: "Laptop",
    model: "Apple ipad Mini",
    desc: "G2356",
    price: " $ 1250.00",
    card:"Add Card"
  },
  {
    image: Two,
    name: "Cameras",
    model: "New X5c-12.4Ghz Gyro",
    desc: "Rc Quadcopter Drone",
    price: " $ 12590.00",
    card:"Add Card"
  },
  {
    image: Five,
    name: "Cameras",
    model: "Apple Ipad New",
    desc: "G2356",
    price: " $ 12400.00",
    card:"Add Card"
  },
  {
    image: Six,
    name: "Cameras",
    model: "New X5c-12563Djk",
    desc: "CKli-01Jb",
    price: " $ 12542.00",
    card:"Add Card"
  },
  {
    image: Three,
    name: "Headphones",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 756250.00",
    card:"Add Card"
  },
  {
    image: Four,
    name: "Computers",
    model: "Apple Imac Zosc4824",
    desc: "Retin",
    price: " $ 12850.00",
    card:"Add Card"
  },
  {
    image: Seven,
    name: "Computer",
    model: "Apple ipad 1232BG 9.7",
    desc: "Tablet",
    price: " $ 42250.00",
    card:"Add Card"
  },
  {
    image: Eighteen,
    name: "Computers",
    model: "smartphone 75",
    desc: "123GB",
    price: " $ 12552.03650",
    card:"Add Card"
  },
  {
    image: Seventeen,
    name: "Computers",
    model: "Beats snarkitecture",
    desc: "Headphones",
    price: " $ 12450.00",
    card:"Add Card"
  },
  {
    image: Ninteen,
    name: "Computer",
    model: "Notebook Widescreen Z51-120",
    desc: "40K6013UPB10",
    price: " $ 12050.010",
    card:"Add Card"
  },
];
