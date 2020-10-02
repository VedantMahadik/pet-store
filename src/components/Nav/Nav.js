import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing components
import "./Nav.css";
import Button from "../Button";

const Nav = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	// when clicked changes the fa from bars to times and vice-versa
	const clickHandler = () => {
		setClick(!click);
	};

	// this is used to close hambuger menu when an option is selected or the hambuger is clicked
	const closeMobile = () => {
		setClick(false);
	};

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	// when the page is refreshed the sign up button pops
	// to avoid it useEffect is called during starting of the app
	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				{/* Logo */}
				<Link className="navbar-logo" to="/" onClick={closeMobile}>
					<i className="fas fa-cat"></i>
					<h1 className="navbar-title">PAWS</h1>
					<i className="fas fa-dog"></i>
				</Link>

				{/* hambuger */}
				<div className="menu-icon" onClick={clickHandler}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>

				{/* menu options */}
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link className="nav-links" to="/" onClick={closeMobile}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-links" to="/pet" onClick={closeMobile}>
							Pets
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-links" to="/petStore" onClick={closeMobile}>
							Pet Products
						</Link>
					</li>
					{/* this part does not show in desktop mode */}
					{/* this is for the mobile hamburger */}
					<li className="nav-item">
						<Link className="nav-links-mobile" to="/sign-up" onClick={closeMobile}>
							Sign Up
						</Link>
					</li>
				</ul>
				{/* when button is true that is desktop mode, the part after && is called */}
				{button && (
					<Button buttonStyle="btn--outline" link="/sign-up">
						Sign Up
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Nav;
