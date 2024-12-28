import React from "react";

function Skeleton() {
  return (
    <div className="bg-white h-auto shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      {/* Skeleton Image */}
      <div className="w-full h-56 bg-gray-200 animate-pulse"></div>

      {/* Skeleton Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>

        {/* Price */}
        <div className="h-4 w-1/4 bg-gray-200 rounded-md animate-pulse"></div>

        {/* Button Placeholder */}
        <div className="mt-auto h-10 w-full bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Skeleton;
