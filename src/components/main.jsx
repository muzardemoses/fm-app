import React from "react";
import "../assets/styles/main.css";
import illuImage from "../assets/images/illustration-intro.png";

import bgCurvyDesktop from "../assets/images/bg-curvy-desktop.svg";

export const Main = () => {
	return (
		<div className="main_content">
			<div className="main_img">
				<img src={illuImage} alt="illustration"  className=" img_main"/>
			</div>
			<div className="main_second">
				<h1> All your files in one secure location, accessible anywhere.</h1>
				<p>
					{" "}
					Fylo stores all your most important files in one secure location.
					Access them wherever you need, share and collaborate with friends
					family, and co-workers.
				</p>
				<button className="main_btn">Get Started</button>
				<img src={bgCurvyDesktop} alt="curvy" className="curvy"/>
			</div>
		</div>
	);
};
