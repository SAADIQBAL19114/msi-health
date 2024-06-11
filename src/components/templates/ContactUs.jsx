import React, { useEffect, useState, useRef } from "react";
import Container from "../Container";
import Divider from "../Divider";
import Phone from "../../icons/regular/PhoneWhite";
import ListItem from "../ListItem";
import Email from "../../icons/regular/Email";
import Button from "../Button";

const ContactUs = () => {
  const [dropDown, setDropDown] = useState(false);
  const [appointment, setAppointment] = useState("Select Appointment Type");
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section>
      <Divider Ypadding="py-24" />
      <Container>
        <div className="flex flex-row items-center justify-center">
          <div className="flex w-[38%] flex-col gap-y-8">
            <div>
              <p className="text-primary text-xs font-bold">APPOINTMENT</p>
              <h3 className="text-4.25xl leading-54 font-bold">
                Get in touch to book your first appointment
              </h3>
            </div>
            <p className="text-xl font-medium leading-7">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <div className="flex flex-col gap-y-6">
              <ListItem
                styles={"!p-0"}
                iconStyle={"bg-primary rounded-full h-7 w-7 flex items-center"}
                icon={<Phone />}
                text={"(123)-456-7890"}
                textStyle={"text-xl font-medium text-black"}
              />
              <ListItem
                styles={"!p-0"}
                iconStyle={"bg-primary rounded-full h-7 w-7 flex items-center"}
                icon={<Email />}
                text={"medico@health.care"}
                textStyle={"text-xl font-medium text-black"}
              />
            </div>
          </div>
          <div className="flex w-[62%] justify-end pr-20 ">
            <div className="rounded-lg bg-white p-8  ">
              <form action="" className="flex w-[405px] flex-col gap-y-4">
                <input
                  type="text"
                  className=" border-1 border-grayBox rounded-lg border-solid p-4 text-lg font-medium leading-6 "
                  id="name"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className=" border-1 border-grayBox rounded-lg border-solid p-4 text-lg font-medium leading-6 "
                  id="phone"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  className=" border-1 border-grayBox rounded-lg border-solid p-4 text-lg font-medium leading-6 "
                  id="email"
                  placeholder="Email"
                />
                <div ref={dropdownRef}>
                  <div className={`relative`}>
                    <div
                      onClick={handleClick}
                      className={`flex flex-row rounded-lg  bg-white p-4 text-lg font-medium leading-6 text-[#9ca3af] ${dropDown ? "border-primary rounded-lg border-2" : "border-1 border-grayBox border-solid"}`}
                    >
                      <div className="text-light-grey flex-1 text-lg font-medium">
                        {appointment}
                      </div>
                      <div className="flex items-start justify-center">
                        <div
                          className={`border-b-1 border-r-1 mt-1 h-3 w-3 flex-1 ${dropDown ? "rotate-225 translate-y-2" : "rotate-45"} border-[#9ca3af]`}
                        ></div>
                      </div>
                    </div>
                    <div
                      className={` border-1 absolute w-full rounded-lg border-solid bg-white ${dropDown ? "flex flex-col" : "hidden"}`}
                    >
                      <label
                        htmlFor="option1"
                        className="border-b-1 p-2 text-lg font-medium hover:bg-slate-100"
                      >
                        Cardiology
                      </label>
                      <input
                        className="hidden"
                        type="radio"
                        value="Cardiology"
                        onClick={(e) => {
                          setAppointment(e.target.value);
                          handleClick();
                        }}
                        id="option1"
                      />
                      <label
                        className="border-b-1 p-2 text-lg font-medium hover:bg-slate-100"
                        htmlFor="option2"
                      >
                        Health Check Up
                      </label>
                      <input
                        className="hidden"
                        type="radio"
                        value="Health Check Up"
                        onClick={(e) => {
                          setAppointment(e.target.value);
                          handleClick();
                        }}
                        id="option2"
                      />
                      <label
                        className="p-2 text-lg font-medium hover:bg-slate-100"
                        htmlFor="option3"
                      >
                        Eye Check Up
                      </label>
                      <input
                        className="hidden"
                        type="radio"
                        value="Eye Check Up"
                        onClick={(e) => {
                          setAppointment(e.target.value);
                          handleClick();
                        }}
                        id="option3"
                      />
                    </div>
                  </div>
                </div>
                <textarea
                  rows={"5"}
                  className=" border-1 border-grayBox rounded-lg border-solid p-4 text-lg font-medium leading-6 "
                  id="name"
                  placeholder="Message"
                />
                <Button
                  fullWidth={true}
                  styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
                  children={"Submit Now"}
                  textStyle={"text-center"}
                />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
