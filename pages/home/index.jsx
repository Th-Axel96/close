import Layout from "../../src/components/layouts/layout";
import Content from "./content";
// import  CurtainMenu  from "@src/components/layouts/CurtainMenu";
import Slider from "@src/components/js/slider";
import ExampleComponent from "@src/components/js/typeAnimation";
// SImpleAnimate

import { SimpleAnimate } from "@src/components/js/SImpleAnimate";

const HomePage = () => {
  return (
    <>
      <h1>test</h1>
      <SimpleAnimate />

      <ExampleComponent />
      <Slider />
      {/* <CurtainMenu /> */}
      {/* <button id="btn-1">click</button> */}
      {/* <Layout children={<Content />} /> */}
    </>
  );
};

export default HomePage;
