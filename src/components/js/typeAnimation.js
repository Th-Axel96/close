// TypeAnimation

import { TypeAnimation } from "react-type-animation";

let styles = {
    
}


const ExampleComponent = () => {
  return (
    <TypeAnimation className="flex justify-center "
      sequence={[
        "Portfolio", // Types 'One'
        1000, // Waits 1s
        "Axel", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Moussart", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ color:"blueviolet" , fontSize: "4em" }}
    />
  );
};

export default ExampleComponent