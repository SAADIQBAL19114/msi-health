import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  fullWidth,
  href,
  onClick,
  styles,
  icon,
  iconStyle,
}) => {
  const btnBorder = `${href?.length ? ` inline-flex border border-white` : ``}`;
  const btn = `cursor-pointer rounded-lg font-bold text-white justify-center flex items-center bg-primary ${btnBorder}`;

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
      {icon && (
        <span className={`${iconStyle} h-auto w-auto pr-4`}>
          {React.cloneElement(icon)}
        </span>
      )}
      {children}
    </>,
  );
};
export default Button;
