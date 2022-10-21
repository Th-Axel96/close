import Layout from "../../src/components/layouts/layout";
import Content from "./content";
import { Header } from "../../src/components/layouts/header";
// import  CurtainMenu  from "@src/components/layouts/CurtainMenu";
import TypingAnimation from "@src/components/js/typeAnimation";
// SImpleAnimate
import { SimpleAnimate } from "@src/components/js/SImpleAnimate";
import { IconWorkCarousel } from "@src/components/js/iconWorkCarousel";

const HomePage = () => {
  return (
    <>
      <Header />
      <IconWorkCarousel />

      {/* <div className="flex justify-center text-blue-400 uppercase">
        <TypingAnimation />
      </div>

      <SimpleAnimate />  */}
      {/* <CurtainMenu /> */}
      {/* <button id="btn-1">click</button> */}
      {/* <Layout children={<Content />} /> */}
    </>
  );
};

export default HomePage;
