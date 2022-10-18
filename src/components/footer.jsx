import React from "react";
import "../assets/styles/footer.css";
import fileIcon from "../assets/images/logo.svg";
import location from "../assets/images/icon-location.svg";
import footerProfile from "../assets/images/footer-profile.jpg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import facebookIcon from "../assets/images/logo-facebook.svg";
import twitterIcon from "../assets/images/icons8-twitter-circled.svg";
import instagramIcon from "../assets/images/icons8-instagram.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="footer">
			<div>
				<img src={fileIcon} alt="File Manager" className="footer_fileIcon" />
			</div>
			<div className="footer_cont">
				<div className="loca_pro">
					<img src={location} alt="location" className="footer_location" />
					<div className=" pr_o">
						<p className="conf_use">
							Created this project using Css and React. <br /> I am learning to
							code and would appreciate any feedback. Thanks!
						</p>
						<div className="sub_profile">
							<img src={footerProfile} alt="" className="profile_img" />
							<div className="sub_cont">
								<h5>Moses Adebayo</h5>
								<p>
									Software Engineer, <strike>Huddle</strike>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="phone_contain">
						<img src={phoneIcon} alt="phone" className="footer_phone" />
						<p className="footer_phone_num">+1-543-123-4567</p>
					</div>
					<div className="email_contain">
						<img src={emailIcon} alt="email" className="footer_email" />
						<p className="footer_email_add"> example@fylo.com</p>
					</div>
				</div>
				<div className="footer_links_one">
					<Link to=""> About Us</Link>
					<Link to=""> Jobs</Link>
					<Link to=""> Press</Link>
					<Link to=""> Blog</Link>
				</div>
				<div className="footer_links_two">
					<Link to=""> Contact Us</Link>
					<Link to=""> Terms</Link>
					<Link to=""> Privacy</Link>
				</div>
				<div className="footer_social">
          <a href="https://web.facebook.com/ademuzardemoses/" target='blank'>
					<img src={facebookIcon} alt="facebook" className="footer_facebook" />
          </a>
					<a href="https://twitter.com/Muzarde1" target='blank'>
          <img src={twitterIcon} alt="twitter" className="footer_twitter" />
          </a>
					<a href="https://www.instagram.com/ademuzardemoses/" target="blank">
          <img
						src={instagramIcon}
						alt="instagram"
						className="footer_instagram"
					/>
          </a>
				</div>
			</div>
		</div>
	);
};
