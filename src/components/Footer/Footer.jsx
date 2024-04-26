// Filename - components/Footer.js
import { Button } from "antd";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pointer from "../../assets/pointer.gif";
import thanks from "../../assets/thanks.gif";
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
						<FooterLink href="mailto:rohithsai352@gmail.com">
							Gmail  <MdMailOutline />
						</FooterLink>
						<FooterLink href="https://github.com/Rohithsai922">
							Github <FaGithub />
						</FooterLink>
						<FooterLink href="https://www.instagram.com/rohithsai922/">
							Instagram  <FaInstagram />
						</FooterLink>
						
						
					</Column>
					<Column>
						<Heading>FeedBack Form</Heading>
						<a href="https://forms.visme.co/formsPlayer/jwowozq1-contact-form">
						<Button>FeedBack</Button>
						</a>
						<img src={pointer} alt="pointer" />
						
					</Column>
					<Column>
						
						
							<img src={thanks} alt="Thank you"    style={{ marginTop: '40px' }}  />
						
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
