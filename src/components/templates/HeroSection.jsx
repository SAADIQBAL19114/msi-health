import React from "react";
import Container from "../Container";
import Button from "../Button";
import ListItem from "../ListItem";
import Face from "../../icons/regular/Face";
import Divider from "../Divider";

const HeroSection = () => {
  return (
    <section>
      <Divider Ypadding="py-3" />
      <Container>
        <div className="flex flex-row gap-x-24">
          <div className="relative w-[45%] ">
            <img
              src="/images/heroImage.png"
              alt="heroPerson"
              className="w-full"
            />
            <ListItem
              styles={
                "gap-x-2 rounded-lg2 absolute right-96 bottom-72 w-[180px] bg-white p-3"
              }
              icon={<Face />}
              text={"More than 10K Patients treated!"}
              textStyle={"text-sm font-medium leading-19 text-black"}
            />
          </div>
          <div className="flex w-[55%] flex-col items-start gap-y-6 py-8">
            <p className="text-primary text-xl font-bold leading-7">
              Welcome to Medico Healthcare
            </p>
            <h1 className="text-7.5xl leading-90 font-bold">
              Your Journey to Better Health Starts Here
            </h1>
            <Button
              styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
              children={"Discover More"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
