import Layout from "../../src/components/layouts/layout";
import Content from "./content";
import Header from "@src/components/layouts/header";
// import  CurtainMenu  from "@src/components/layouts/CurtainMenu";
import Slider from "@src/components/js/slider";
import TypingAnimation from "@src/components/js/typeAnimation";
// SImpleAnimate

import { SimpleAnimate } from "@src/components/js/SImpleAnimate";
import { Darkmod1 } from "@src/components/js/darkmod";

const HomePage = () => {
  return (
    <>
    <Darkmod1 />
      <Header/>
      <div className="flex justify-center text-blue-400 uppercase">
        <TypingAnimation />
      </div>
      <Slider />
      <SimpleAnimate />
      {/* <CurtainMenu /> */}
      {/* <button id="btn-1">click</button> */}
      {/* <Layout children={<Content />} /> */}
    </>
  );
};

export default HomePage;
