import React from "react";
import Container from "../Container";
import ListItem from "../ListItem";
import Location from "../../icons/regular/Location";
import Email from "../../icons/regular/Email";
import Whatsapp from "../../icons/regular/Whatsapp";

const TopBar = () => {
  return (
    <div className="bg-primary ">
      <Container styles={"flex flex-row"}>
        <div className=" flex flex-row ">
          <ListItem
            icon={<Location />}
            text={"90919 Madie run Apt. 790"}
            textStyle={"text-white"}
          />
          <ListItem
            icon={<Email />}
            text={"medico@health.care"}
            textStyle={"text-white"}
          />
        </div>
        <ListItem
          styles={"ml-auto"}
          icon={<Whatsapp />}
          text={"Connect on Whatsapp"}
          textStyle={"text-white underline underline-offset-4"}
        />
      </Container>
    </div>
  );
};

export default TopBar;
