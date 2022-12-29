import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../../img/hero--img.jpg";

const HeroSection = () => {
  return (
    <>
      <div className=" lg:flex  p-4 items-center ">
        <div className="lg:w-1/2 md:w-full w-full md:text-left lg:text-left text-center p-4">
          <h1 className="text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-2">
            Meals On Wheels <span className="text-dark"></span>
          </h1>
          <p className="text-dark lg:text-2xl md:text-xl  text-lg py-4">
            We are the most convenient online food ordering site, connecting
            people with the best restaurants around them.
          </p>
          <button className="bg-red mx-5 px-4 py-2 text-xl rounded-full text-white">
            <Link to="/restaurants">Choose Restaurant</Link>
          </button>
        </div>
        <div className="lg:w-1/2 md:w-full w-full">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
