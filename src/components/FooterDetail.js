import React from "react";
import { Link } from "react-router-dom";

const FooterDetail = ({ title = "", list = [] }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {console.log("title>>>>>", title)}
      <p className="text-base font-medium leading-normal text-white">{title}</p>
      <div className="flex flex-col gap-y-2">
        {list.map((item, index) => {
          return (
            <Link
              key={index}
              className="text-base font-medium leading-normal text-white"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterDetail;
