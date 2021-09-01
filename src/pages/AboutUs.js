import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/MiniCenteredFooter";
import MainFeature1 from "../components/features/TwoColWithButton.js";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About The Grace</Subheading>}
        heading="We help your body do what it's designed to do"
        buttonRounded={false}
        primaryButtonText="Show more"
        imageSrc="https://static.wixstatic.com/media/09e008_28561e6c1b7a4abba3c4c9dc303b6445~mv2.jpg/v1/fit/w_1000%2Ch_773%2Cal_c%2Cq_80/file.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
