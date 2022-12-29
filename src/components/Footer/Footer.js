import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-20 bg-dark p-4">
        <div className="p-4">
          <img
            src="https://www.pexels.com/photo/shopping-bag-with-inscription-hanging-on-street-5516046/"
            width="50%"
            alt=""
          />
          <p className="text-gray">
            Order tasty meals from restaurants near you and have them delivered
            to your doorstep. Choose from a wide selection of restaurants and
            have your food delivered to you.You order online, you'll have it!
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">Explore</h2>
          <p>
            {" "}
            <NavLink to="/home" className="font-bold text-xl mx-4 text-white">
              Home
            </NavLink>
          </p>
          <p>
            {" "}
            <NavLink to="/order" className="font-bold text-xl mx-4 text-white">
              Order
            </NavLink>
          </p>
          <p>
            {" "}
            <NavLink to="/login" className="font-bold text-xl mx-4 text-white">
              Login
            </NavLink>
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">Contact info</h2>
          <p className="py-2 text-primary">
            <i className="fas fa-map-marker-alt pr-2 text-primary text-xl"></i>
            Our location:
          </p>
          <p className="px-4 text-white">
            {" "}
            312, Herbert Macaulay Way, Sabo, Yaba, Lagos
          </p>
          <p className="text-primary py-2">
            <i className="fas fa-phone-volume pr-2 text-primary text-xl"></i>
            Phones:
          </p>
          <p className="px-4 text-white">+2348101667784</p>
          <p className="px-4 text-white"> +2348101851250</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Privacy Policy
          </h2>
          <p className="p-4 text-white">
            Meals-On-Wheels respects the privacy of every individual who visits
            our website. Our information about content, user data, images and
            more are secured.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
