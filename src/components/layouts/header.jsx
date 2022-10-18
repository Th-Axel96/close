import { useState } from "react";
// Navbar
import { NavbarDesktop } from "./navbar";
import { NavbarMobile } from "./navbar";
// icon
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  // function show with useState
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <header className="bg-gray-500">
      <button onClick={Toggle}>
        <MenuIcon className="text-4xl md:hidden" />
      </button>
      {show === true ? <NavbarMobile /> : ""}
    </header>
  );
};
