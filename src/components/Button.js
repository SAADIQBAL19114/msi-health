import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  fullWidth,
  pathname,
  href,
  onClick,
  styles,
  icon,
  iconStyle,
}) => {
  // const {
  //   // icon,
  //   children,
  //   fullWidth,
  //   pathname,
  //   href,
  //   onClick,
  // } = props;

  const btnBorder = `${href?.length ? `border border-white` : ``}`;
  const btn = `cursor-pointer rounded-lg bg-primary-100 p-5 font-bold text-white ${btnBorder}`;

  const btnProps = {
    className: `${fullWidth ? "w-full" : ""} ${btn} ${styles}`,
    onClick: onClick,
  };

  const linkProps = { ...btnProps, href };

  const buttonElement = href?.length ? Link : "button";

  return React.createElement(
    buttonElement,
    linkProps,
    <>
      {icon && <span className={`${iconStyle}`}>
        {React.cloneElement(icon, { color: "white" })}
      </span>}
      {children}
    </>,

  );
};
export default Button;
