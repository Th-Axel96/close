let styles = {
    navbar: "flex flex-row",
    logo: "h-auto w-20 lg:w-40",
}

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <div>
                <img src="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg" alt="" className={styles.logo}/>
            </div>

            {/* NAVBAR */}
            <div>
                <ul>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
