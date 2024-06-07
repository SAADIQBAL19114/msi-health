import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Button from "../Button";
import { aboutUsFeature } from "../../data/aboutUsFeatures";
import ListItem from "../ListItem";
import Tick from "../../icons/regular/Tick";

const AboutUs = () => {
  return (
    <section className="bg-white">
      <Divider Ypadding="" />
      <Container>
        <div className="px-20 pb-24 pt-28">
          <div className="flex flex-row justify-between gap-x-40">
            <div className="flex flex-1 items-center">
              <img
                src="/images/aboutUs.png"
                alt="aboutusImage"
                className="w-full"
              />
            </div>
            <div className="flex-1 ">
              <h3 className="text-4.25xl leading-54 font-bold">
                Why Choose Us?
              </h3>
              <div className=" flex flex-col gap-y-5 pt-6">
                {aboutUsFeature.map((data, index) => {
                  return (
                    <ListItem
                      styles={"p-0"}
                      key={index}
                      icon={<Tick />}
                      text={data}
                      textStyle={"text-xl font-medium leading-7"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-6 py-12">
            <h3 className="text-4.25xl leading-54 font-bold">
              Wellness, Compassion, Quality
            </h3>
            <p className="pr-28 text-xl font-medium leading-7">
              They live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean. A small river named Duden flows by their
              place and supplies it.
            </p>
            <Button
              styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
              children={"Take An Appointment"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
