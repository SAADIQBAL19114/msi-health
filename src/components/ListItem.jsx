import React from "react";

const ListItem = ({ icon, iconStyle, text, textStyle, styles }) => {
  return (
    <div className={`flex items-center gap-x-3 p-4 ${styles}`}>
      <span className={`flex justify-center ${iconStyle}`}>{icon}</span>
      <p className={`text-lg font-medium leading-6 text-white ${textStyle}`}>{text}</p>
    </div>
  );
};

export default ListItem;


