import React from "react";
import Banner from "../../Banner/Banner";
import SocialLinks from "../../../Common/SocialLink";
import CollegeCard from "../../CollegeCard/CollegeCard";
import Logo from "../../../Common/Logo/Logo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SocialLinks></SocialLinks>
      <div>
        <Logo></Logo>
      </div>
      <div className="mt-20">
        <CollegeCard></CollegeCard>
      </div>
    </div>
  );
};

export default Home;
