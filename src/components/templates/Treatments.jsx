import React from "react";
import Container from "../Container";
import Divider from "../Divider";
import { treatmentCards } from "../../data/treatmentCardData";
import TreatmentCard from "../TreatmentCard";

const Treatments = () => {
  return (
    <section>
      <Container>
        <Divider Ypadding="py-16" />
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-4.5xl leading-62 font-bold">
              Dedicated to provide best treatment.
            </h2>
            <p className="pr-64 text-xl font-medium leading-7">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            {treatmentCards.map((card) => {
              return (
                <TreatmentCard
                  image={card.image}
                  alt={card.alt}
                  title={card.title}
                  profession={card.profession}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Treatments;
