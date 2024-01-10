import React from "react";
import bannerImg from "../assets/rocketlaunch.webp";
export const Banner = () => {
  return (
    <>
      <div>
        <img
          className="h-screen w-screen object-cover"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </>
  );
};
