import React from "react";
import Divider from "../Divider";
import Container from "../Container";
import Logo from "../../icons/regular/Logo";
import ListItem from "../ListItem";
import { links } from "../../data/navLinks";
import { NavLink } from "react-router-dom";
import Phone from "../../icons/regular/Phone";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <Divider Ypadding="py-3" />
      <Container>
        <div className="flex flex-row gap-y-2 bg-white py-5">
          <div className="pl-5">
            <ListItem
              icon={<Logo />}
              text={"Medico"}
              textStyle={"text-black font-bold text-xl leading-7"}
            />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <nav className="flex items-center">
              <ul className="flex flex-row gap-7 px-12 font-medium leading-7 ">
                {links.map((item) => {
                  return (
                    <li key={item.key}>
                      <NavLink to={item.to}>
                        {item.name}
                        {console.log(item.name)}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ListItem
              styles={"gap-x-2"}
              icon={<Phone />}
              text={"1005-346-272"}
              textStyle={"text-xl font-bold leading-7 text-black"}
            />
            <Button
              styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
              children={"Appointment"}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
