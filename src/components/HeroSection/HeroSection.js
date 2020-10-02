import React from "react";
//import "../App.css";
import Button from "../Button";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<>
			<div className="hero-container">
				<video src="/video/video.mp4" autoPlay loop muted />
				<h1>For all your pet needs</h1>
				<p>What are you waiting for?</p>
				<div className="hero-btns">
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						link="/sign-up"
					>
						Get started
					</Button>
					<Button
						className="btns"
						buttonStyle="btn--primary"
						buttonSize="btn--large"
						link="/sign-up"
					>
						Sign up
					</Button>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
