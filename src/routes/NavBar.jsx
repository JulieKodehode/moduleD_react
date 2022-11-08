// NO LONGER USED.

// // Routes is (?), Route is pages(?) No more <a href=""> NavLink and Link, navLink checks if it corresponds with a navbar(?) and Link is replacing anchor.
import { NavLink, Outlet } from "react-router-dom";

// Adding css, but there must be a better way of doing this? Global perhaps?
import styles from "./NavBar/NavBarStyle.module.css";

const NavBar = () => {
	return (
		// navBarStyle is parent
		<div className={styles.NavBarStyle}>
			<nav>
				<ul className={styles.Ul}>
					<li className={styles.Li}>
						<NavLink to="/">Home</NavLink>
					</li>
					<li className={styles.Li}>
						<NavLink to="/About">About</NavLink>
					</li>
					<li className={styles.Li}>
						<NavLink to="/Contact">Contact</NavLink>
					</li>
					{/* The / in Link to is nesting the Home, About and Contact inside App(?) */}
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default NavBar;
