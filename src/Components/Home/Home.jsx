import React from "react";
import Main from "../Main/Main";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Services from "../Services/Services";
import OurClients from "../OurClients/OurClients";
import ProjectFields from "../ProjectFields/ProjectFields";
import VisionMission from "../VisionMission/VisionMission";
import States from "../States/States";

export default function Home() {
  return (
    <>
      <Main />
      <WhoWeAre />
      <Services />
      <OurClients />
      <ProjectFields />
      <States />
      <VisionMission />
    </>
  );
}
