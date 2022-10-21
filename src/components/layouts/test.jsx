
import { NavbarDesktop } from "./navbarDesktop";
import { NavbarMobile } from "./navbarMobile";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <header>
      <MenuIcon />
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
};




