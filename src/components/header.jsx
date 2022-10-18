import React from "react";
import  "../assets/styles/header.css";
import {Link} from "react-router-dom";
import fileIcon from "../assets/images/logo.svg";
export const Header = () => {
	return (
		<div className="header">
			<div className="header_icon">
				<img src={fileIcon} alt="File Manager"  className="icon_header"/>
			</div>
			<div className="header_links">
				<Link to="" className="header_link">Features</Link>
				<Link to="" className="header_link">Team</Link>
				<Link to="" className="header_link">Sign In</Link>
			</div>
		</div>
	);
};


