// Filename - components/Footer.js
import { Button } from "antd";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
			
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>My Portfolio</Heading>
						<FooterLink href="#">
							Home
						</FooterLink>
						<FooterLink href="#About">
							About
						</FooterLink>
						<FooterLink href="#projects">
							Projects
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							Gmail  <MdMailOutline />
						</FooterLink>
						<FooterLink href="#">
							Instagram  <FaInstagram />
						</FooterLink>
						<FooterLink href="#">
							Github <FaGithub />
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>FeedBack Form</Heading>
						<Button>FeedBack</Button>
						
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
