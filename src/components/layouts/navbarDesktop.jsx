import Link from "next/link";
let styles = {
  flex: "flex flex-row justify-around items-center h-40",
  navDesktop:
    "bg-clip-text text-transparent bg-gradient-to-b from-gold to-white font-spartan text-3xl uppercase  ",
  borderLink: "border border-amber-800 shadow-xl p-4 rounded-xl",
  hFull: "h-full",
};

export const NavbarDesktop = () => {
  return (
    <nav>
      <ul className={styles.flex}>
        <li>
          <Link href="/">
            <a className={`${styles.navDesktop} ${styles.borderLink} `}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={`${styles.navDesktop}`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={`${styles.navDesktop}`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={`${styles.navDesktop}`}>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
