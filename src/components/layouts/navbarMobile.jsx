import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

let styles = {
  navmobile: "flex flex-col  items-center justify-around h-80 ",
  border4x: "hover:border-x-4 border-black px-1 ",
  textGold:
    "bg-clip-text text-transparent bg-gradient-to-b from-gold to-white font-spartan text-3xl uppercase ",
};

export const NavbarMobile = () => {
  return (
    <>
      <button
        class="inline-block px-6 py-2.5  text-gold font-medium text-xs leading-tight uppercase rounded "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <MenuIcon />
      </button>

      <div
        class="offcanvas offcanvas-start fixed bottom-0 flex flex-col w-40 bg-brown invisible bg-clip-padding shadow-sm outline-none transition duration-1000 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-screen max-h-full"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header flex items-center justify-between p-4">
          <h5
            class="offcanvas-title mb-0 leading-normal font-semibold"
            id="offcanvasTopLabel"
          >
            Offcanvas top
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* div for NAV Burger  */}
        <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
          {" "}
          <nav>
            <ul className={styles.navmobile}>
              <li>
                <Link href="/">
                  <a className={`${styles.textGold} ${styles.border4x}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`${styles.textGold} ${styles.border4x}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`${styles.textGold} ${styles.border4x}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`${styles.textGold} ${styles.border4x}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`${styles.textGold} ${styles.border4x}`}>
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
