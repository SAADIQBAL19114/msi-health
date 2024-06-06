import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import Button from "../Button";
import { serviceData } from "../../data/serviceCardData";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <section>
      <Divider Ypadding="py-20" />
      <Container>
        <div className="relative flex flex-row">
          <div className="w-[50%]">
            <p className="text-primary text-xl font-bold leading-7">
              SERVICES & TREATMENTS
            </p>
            <h2 className="text-4.5xl leading-62 font-bold">
              More than 40 specialty and health care services
            </h2>
          </div>
          <div className="absolute bottom-1 right-1">
            <Button
              styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
              children={"See All Services"}
            />
          </div>
        </div>
        <div className="p-3 py-10">
          <div className="flex flex-row flex-wrap">
            {serviceData.map((data) => {
              return (
                <div key={data.id} className="w-1/2 p-5">
                  <ServiceCard
                    imagePath={data.imagePath}
                    alt={data.alt}
                    serviceTitle={data.serviceTitle}
                    serviceDescription={data.serviceDescription}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
