import React from "react";

const TreatmentCard = ({ title, image, alt, profession, styles }) => {
  return (
    <div className={`relative`}>
      <img
        className={`rounded-lg`}
        src={image}
        alt={alt}
      />
      <div
        className={`bg-primary px-7.5 rounded-lg2 top-38 absolute -bottom-12 left-6 flex flex-col gap-y-1 pb-6 pt-4 text-white ${styles}`}
      >
        <p className={`text-base font-bold text-white`}>{title}</p>
        <p className={`text-2xl font-bold text-white`}>{profession}</p>
      </div>
    </div>
  );
};


export default TreatmentCard;
