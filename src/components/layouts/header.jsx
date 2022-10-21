import { useState } from "react";
// Navbar
import { NavbarDesktop } from "./navbarDesktop";
import { NavbarMobile } from "./navbarMobile";
// icon
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  // function show with useState
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <header className="bg-img ">
      <NavbarDesktop />
      <button onClick={Toggle}>
        <MenuIcon className="text-4xl md:hidden text-gold" />
      </button>
      {show === true ? <NavbarMobile /> : ""}
    </header>
  );
};
