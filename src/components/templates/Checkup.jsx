import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Button from "../Button";
import { aboutUsFeature } from "../../data/aboutUsFeatures";
import ListItem from "../ListItem";
import TickWhite from "../../icons/regular/TickWhite";
import HandsPlus from "../../icons/regular/HandsPlus";
import { checkUpFeatures } from "../../data/checkUpFeatures";

const Checkup = () => {
  return (
    <section>
      <Divider Ypadding="py-10" />
      <Container>
        <div className="flex flex-col gap-y-6 ">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h3 className="text-4.25xl leading-54 font-bold">
              Health Checkup Plans
            </h3>
            <p className="px-80 pb-4 text-center text-xl font-medium leading-7">
              They live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean named flows.
            </p>
            <div className="flex flex-row gap-x-1 bg-white p-5">
              <p className="bg-primary cursor-pointer rounded-lg px-6 py-4 text-xl font-bold leading-7 text-white">
                Women Health
              </p>
              <p className="cursor-pointer rounded-lg px-6 py-4 text-xl font-bold leading-7">
                Cancer Screening
              </p>
              <p className="cursor-pointer rounded-lg px-6 py-4 text-xl font-bold leading-7">
                Kids Vaccines
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-7 px-20 py-8">
          <div className="flex w-[52%] flex-col items-start gap-y-6 py-20 ">
            <HandsPlus />
            <h3 className="text-3.5xl p pb-4 font-bold leading-7">
              Women Health Checkup
            </h3>
            <p className="text-lg font-medium leading-6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </p>
            <div className="flex flex-col gap-y-4 pb-6">
              {checkUpFeatures.map((data, index) => {
                return (
                  <ListItem
                    styles={"p-0"}
                    key={index}
                    icon={<TickWhite />}
                    text={data}
                    textStyle={"text-xl font-medium leading-7"}
                  />
                );
              })}
            </div>
            <Button
              styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
              children={"Take An Appointment"}
            />
          </div>
          <div className="w-[48%]">
            <img
              src="/images/checkUp.png"
              alt="checkUpImage"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkup;
