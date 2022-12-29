import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Delivery from "./Delivery/Delivery";
import OtherSection from "./OtherSection/OtherSection";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <OtherSection></OtherSection>
      <Delivery></Delivery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
