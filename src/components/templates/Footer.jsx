import React from "react";
import Divider from "../Divider";
import Container from "../Container";
import IconWhite from "../../icons/regular/IconWhite";
import ListItem from "../ListItem";
import Button from "../Button";
import Arrow from "../../icons/regular/Arrow";
import Whatsapp from "../../icons/regular/Whatsapp";
import { footerDetails } from "../../data/footerData";
import FooterDetail from "../FooterDetail";
import FooterSocialLinks from "../FooterSocialLInks";
import Facebook from "../../icons/regular/Facebook";
import Twitter from "../../icons/regular/Twitter";
import Pinterest from "../../icons/regular/Pinterest";
import Instagram from "../../icons/regular/Instagram";

const Footer = () => {
  return (
    <footer>
      <Divider Ypadding="py-12" />
      <div className="bg-primary">
        <Container styles="pt-20 pb-12">
          <div className="flex flex-row justify-end gap-x-24">
            <div className="flex flex-col gap-y-4">
              <ListItem
                icon={<IconWhite />}
                styles={"pb-6 !px-0 !pt-0"}
                text={"Medico"}
                textStyle={"text-white font-bold text-2xl leading-7"}
              />
              <Button
                styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
                children={"Take an Appointment"}
                href={"/"}
                icon={<Arrow />}
              />
              <Button
                styles={`bg-primary py-4 px-6 text-xl font-bold leading-7  `}
                children={"Connect on Whatsapp"}
                href={"#"}
                icon={<Whatsapp />}
              />
            </div>
            <div className="flex flex-row gap-x-20">
              {footerDetails.map((item, index) => {
                return (
                  <FooterDetail
                    key={index}
                    title={item.title}
                    list={item.list}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-end gap-x-4">
            <FooterSocialLinks img={<Facebook />} />
            <FooterSocialLinks img={<Twitter />} />
            <FooterSocialLinks img={<Pinterest />} />
            <FooterSocialLinks img={<Instagram />} />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
