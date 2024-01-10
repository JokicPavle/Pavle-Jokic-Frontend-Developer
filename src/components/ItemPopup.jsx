import React from "react";
import { capsuleImg } from "../capsuleImages"; // Import your capsule images

export const ItemPopup = ({ capsule, onClose }) => {
  if (!capsule) {
    return null;
  }

  const imageUrl = capsuleImg[capsule.type];

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full text-black flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div className="bg-white p-8 rounded-lg w-[600px] h-auto">
        <img
          src={imageUrl}
          alt={`Image of ${capsule.capsule_serial}`}
          className="rounded-full mb-4 w-[300px] m-auto"
        />
        <p className="text-3xl font-bold mb-4">
          Serial Number: {capsule.capsule_serial}
        </p>
        <p className="text-lg">Type: {capsule.type}</p>
        <p>Status: {capsule.status}</p>
        <p>Original Launch: {capsule.original_launch}</p>
        {capsule.details ? (
          <p>Description: {capsule.details}</p>
        ) : (
          <p>No description available</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-orange-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};
