import React from "react";
import RightArrow from "../icons/regular/RightArrow";

const ServiceCard = ({imagePath, alt, serviceTitle, serviceDescription}) => {
  return (
    <div className="w-512 rounded-lg2 relative flex flex-row gap-x-11 bg-white p-7">
      <div className="w-full max-w-11">
        <img
          src={imagePath}
          alt={alt}
          //   className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-7">
        <h3 className="text-3.5xl font-bold leading-7">
          {serviceTitle}
        </h3>
        <p className="pr-20 text-lg font-medium leading-6">
          {serviceDescription}
        </p>
      </div>
      <div className="bg-grayBox absolute bottom-0 right-0 z-10 flex h-14 w-20 items-center justify-center rounded-br-lg2 p-4  ">
        <RightArrow />
      </div>
    </div>
  );
};

export default ServiceCard;
