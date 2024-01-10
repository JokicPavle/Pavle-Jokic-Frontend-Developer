import React from "react";
import LocationImg from "../assets/location.webp";
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-10 sm:mx-auto my-12 h-full">
      <h1 className="text-center text-4xl font-bold">
        If you have any questions, please contact us
      </h1>

      <p className="text-xl text-center">
        Send us an email with your information and we will do our best to help
        you and answer you as soon as possible.
      </p>
      <div className="flex m-auto flex-col justify-center items-center my-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center mx-auto">
            <input
              className="w-[90%] text-black sm:w-[500px] px-2 py-1 bg-gray-100 mx-4 rounded-lg my-4 focus:border-orange-400"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-[90%] text-black sm:w-[500px] px-2 py-1 bg-gray-100 mx-4 rounded-lg my-4 focus:border-orange-400"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="w-[90%] text-black sm:w-[500px] px-2 py-1 bg-gray-100 mx-4 rounded-lg my-4 focus:border-sky-500"
              type="email"
              placeholder="Email"
            />
            <button className="w-[90%] p-2 bg-orange-500 text-white rounded-full sm:w-[500px] mx-4 my-4">
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-xl">
        Below you can check the locations where we are located.
      </p>
      <img className="block mx-auto my-12" src={LocationImg} alt="map" />
    </div>
  );
};
