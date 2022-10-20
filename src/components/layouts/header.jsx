import { useState } from "react";
// Navbar
import { NavbarDesktop } from "./navbar";
import { NavbarMobile } from "./navbar";
// icon
import MenuIcon from "@mui/icons-material/Menu";

// emple useState
// export const Header = () => {
//   // function show with useState
//   const [show, setShow] = useState(false);
//   const Toggle = () => {
//     setShow(!show);
//   };
//   return (
//     <header className="bg-img ">
//       <NavbarDesktop />
//       <button onClick={Toggle}>
//         <MenuIcon className="text-4xl md:hidden text-gold" />
//       </button>
//       {show === true ? <NavbarMobile /> : ""}
//     </header>
//   );
// };



export const Header = () => {
  
  return (
    <header>
      
      <NavbarDesktop />
     <NavbarMobile  /> 
      
        <MenuIcon className="text-4xl md:hidden" />
     
     
    </header>
  );
};
