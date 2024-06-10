import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Container from "../Container";
import Divider from "../Divider";
import TestimonialCommas from "../../icons/regular/TestimonialCommas";
import TestimonialStars from "../../icons/regular/TestimonialStars";

const Testimonial = () => {
  return (
    <section>
      <Divider Ypadding="py-16" />
      <Container>
        <div className="relative">
          <Swiper
            // loop={true}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: "5000" }}
          >
            <SwiperSlide>
              <div className="flex flex-row gap-x-20 px-24">
                <div className="w-2/5">
                  <img
                    src="/images/testimonialImage.png"
                    alt="testimonialImage"
                    className="w-full"
                  />
                </div>
                <div className="flex w-3/5 flex-col gap-y-2">
                  <TestimonialCommas />
                  <TestimonialStars />
                  <h3 className="text-3.5xl p leading-43.2 pb-4 font-bold">
                    “A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy”.
                  </h3>
                  <div>
                    <p className="text-xl font-medium leading-7">
                      Mr. Williams
                    </p>
                    <p className="text-base font-normal leading-5">
                      Diabetes Patient
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row gap-x-20 px-24">
                <div className="w-2/5">
                  <img
                    src="/images/testimonialImage.png"
                    alt="testimonialImage"
                    className="w-full"
                  />
                </div>
                <div className="flex w-3/5 flex-col gap-y-2">
                  <TestimonialCommas />
                  <TestimonialStars />
                  <h3 className="text-3.5xl p leading-43.2 pb-4 font-bold">
                    “A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy”.
                  </h3>
                  <div>
                    <p className="text-xl font-medium leading-7">
                      Mr. Williams
                    </p>
                    <p className="text-base font-normal leading-5">
                      Diabetes Patient
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
