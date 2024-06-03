import React from "react";

const TreatmentCard = ({ title, image, alt, profession, styles }) => {
  return (
    <div className={`relative`}>
      <img
        className={`rounded-lg`}
        src={{image}}
        alt={{alt}}
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

// <div className="px-7.5 lg:pb-7.5 absolute -bottom-12  left-10 flex flex-col items-start justify-center gap-y-1 rounded-lg bg-primary pb-5 pt-3 text-white sm:-bottom-9 lg:-bottom-14 lg:left-10 lg:pt-5">
//         <p className="text-xs font-bold lg:text-sm">{title}</p>

export default TreatmentCard;
