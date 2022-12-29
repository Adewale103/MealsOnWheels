import React from "react";
import about from "../../../img/about_02.jpg";

const OtherSection = () => {
  return (
    <>
      <div className="lg:mt-20 md:mt-15 mt-10 p-6 lg:flex items-center">
        <div className="lg:w-1/2 md:w-full w-full">
          <img className="rounded-lg mx-auto" width="80%" src={about} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full w-full">
          <h1 className="text-dark font-bold lg:text-6xl md:text-6xl text-4xl py-2">
            Healthy and tasty foods with
          </h1>
          <h1 className="text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-4">
            natural ingredients
          </h1>
          <p className="py-4">
            We believe food is a pleasure and food ordering should be fast and
            definitely fun experience. .
          </p>
          <h1 className="py-4 text-dark text-2xl font-bold">
            {" "}
            <i className="far fa-clock px-4 text-primary text-4xl"></i> Every
            day from 8:00am to 8:00pm
          </h1>
          <h1 className="py-4 text-dark text-2xl font-bold">
            <i className="fas fa-phone-volume px-4 text-primary text-4xl"></i>
            +2349021806462
          </h1>
        </div>
      </div>
    </>
  );
};

export default OtherSection;
