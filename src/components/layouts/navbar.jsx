import Link from "next/link";

let styles = {
  navmobile: "flex flex-col  items-center justify-around h-80 ",
  border4x: "hover:border-x-4 border-black px-1 ",
};

export const NavbarMobile = () => {
  return (
    <nav>
      <ul className={styles.navmobile}>
        <li>
          <Link href="/">
            <a className={styles.border4x}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.border4x}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.border4x}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.border4x}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.border4x}>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const NavbarDesktop = () => {
  return (
    <nav>
      <ul>
       
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
