import React, { useState } from "react";
import access from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";
import stayProductive from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";
import bgQuotes from "../assets/images/bg-quotes.png";
import satish from "../assets/images/profile-1.jpg";
import bruce from "../assets/images/profile-2.jpg";
import iva from "../assets/images/profile-3.jpg";
import "../assets/styles/main-grid.css";
import { Link } from "react-router-dom";

export const MainGrid = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`You have successfully signed up with the email address: ${email}`);
	};

	return (
		<div className="main_grid">
			<div className="main_third">
				<div className="third_one">
					<img src={access} alt="access" className="imgg" />
					<h4> Access your files, anywhere</h4>
					<p>
						The ability to use a smartphone, tablet, or computer to access your
						account means your files follow you everywhere.
					</p>
				</div>
				<div className="third_two">
					<img src={security} alt="security" className="imgg" />
					<h4> Security you can trust </h4>
					<p>
						2-factor authentication and user-controlled encryption are just a
						couple of the security features we allow to help secure your files.
					</p>
				</div>
				<div className="third_three">
					<img src={collaboration} alt="collaboration" className="imgg oth" />
					<h4>Real-time collaboration</h4>
					<p>
						Securely share files and folders with friends, family and colleagues
						for live collaboration. No email attachments required.
					</p>
				</div>
				<div className="third_four">
					<img src={anyFile} alt="anyfile" className="imgg oth" />
					<h4>Store any type of file</h4>
					<p>
						Whether you're sharing holidays photos or work documents, Fylo has
						you covered allowing for all file types to be securely stored and
						shared.
					</p>
				</div>
			</div>
			<div className="main_fourth">
				<div className="proo_img">
					<img src={stayProductive} alt="productivity" className="pro_img" />
				</div>
				<div className="productive">
					<h2>Stay productive, wherever you are</h2>
					<p className="pro_one">
						Never let location be an issue when accessing your files. Fylo has
						you covered for all of your file storage needs.
					</p>
					<p className="pro_two">
						Securely share files and folders with friends, family and colleagues
						for live collaboration. No email attachments required.
					</p>
					<Link to="" className="pro_link">
						{" "}
						See how Fylo works <img src={arrow} alt="arrow" className="arrow"/>{" "}
					</Link>
				</div>
			</div>
			<div className="profiles">
				<div className="profile_one">
					<img src={bgQuotes} alt="quotes" className="quotes" />
					<div className="pro_con">
						<p className="confuse">
							Fylo has improved our team productivity by an order of magnitude.
							Since making the switch our team has become a well-oiled
							collaboration machine.
						</p>
						<div className="sub_profile">
							<img src={satish} alt="" className="profile_img" />
							<div className="sub_content">
								<h5>Satish Patel</h5>
								<p>Founder & CEO, Huddle</p>
							</div>
						</div>
					</div>
				</div>
				<div className="profile_two pro_con">
					<p className="confuse">
						Fylo has improved our team productivity by an order of magnitude.
						Since making the switch our team has become a well-oiled
						collaboration machine.
					</p>
					<div className="sub_profile">
						<img src={bruce} alt="" className="profile_img" />
						<div className="sub_content">
							<h5>Bruce McKenzie</h5>
							<p>Founder & CEO, Huddle</p>
						</div>
					</div>
				</div>
				<div className="profile_three pro_con">
					<p className="confuse">
						Fylo has improved our team productivity by an order of magnitude.
						Since making the switch our team has become a well-oiled
						collaboration machine.
					</p>
					<div className="sub_profile">
						<img src={iva} alt="" className="profile_img" />
						<div className="sub_content">
							<h5>Iva Boyd</h5>
							<p>Founder & CEO, Huddle</p>
						</div>
					</div>
				</div>
			</div>
			<div className="free_form">
				<h3>Get early access today </h3>
				<p>
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our support team would
					be happy to help you.
				</p>
				<div className="formm">
					<form onSubmit={handleSubmit} className="foorm" >
						<input
							type="email"
							value={email}
							placeholder="email@example.com"
							onChange={(e) => setEmail(e.target.value)}
							className="email_input"
							required
						/>
						<button type="submit" className="form_btn">
							Get Started For Free
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
