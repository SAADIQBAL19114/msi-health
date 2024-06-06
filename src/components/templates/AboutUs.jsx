import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Button from "../Button";

const AboutUs = () => {
  return (
    <section className="bg-white">
      <Divider Ypadding="" />
      <Container>
        <div>
          <div className="flex flex-row">
            <div>
              <img
                src="/images/aboutUs.png"
                alt="aboutusImage"
                className="w-full"
              />
            </div>
            <div>
              <h3 className="text-4.25xl leading-54 font-bold">
                Why Choose Us?
              </h3>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
