import React from "react";
import delivery from "../../../img/form-bg.png";
import { Link } from "react-router-dom";
const Delivery = () => {
  return (
    <div>
      <div className="lg:mt-20 md:mt-15 mt-10 p-4 lg:flex items-center">
        <div className="lg:w-1/2 md:w-full w-full">
          <h1 className="text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-2">
            Low cost delivery{" "}
            <span className="text-dark">every day at your convenience</span>
          </h1>
          <p className="py-4">
            The Meals On Wheels makes it simple for anybody to use a mobile
            device to look over the menu of the best vendors and place an order
            for home delivery.
          </p>
          <div>
            <Link to="/registration">
              <button className="text-white font-bold text-xl bg-red px-4 py-2 rounded-full">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full w-full">
          <img
            className="rounded-lg mx-auto"
            width="80%"
            src={delivery}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
