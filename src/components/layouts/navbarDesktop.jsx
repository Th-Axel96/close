import Link from "next/link";
let styles = {
  bgBrown: "bg-brown",
  textGold:
    "bg-clip-text text-transparent bg-gradient-to-b from-gold to-white font-spartan  text-3xl uppercase  ",
  flex: "flex  justify-around items-center h-40 w-full",
  borderLink: "border border-gold shadow-xl p-4 rounded-xl",
};

export const NavbarDesktop = () => {
  return (
    <div className={`${styles.bgBrown} ${styles.flex}`}>
      <nav>
        <ul className={`${styles.flex} `}>
          <li>
            <Link href="/">
              <a className={`${styles.textGold} ${styles.borderLink} `}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`${styles.textGold}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`${styles.textGold}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`${styles.textGold}`}>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
