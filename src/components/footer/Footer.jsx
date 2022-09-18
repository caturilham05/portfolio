import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
	return (
		<footer>
			<a href="/" className="footer__logo">My Portfolio</a>
				<ul className="permalinks">
					<li><a href="/">Home</a></li>
					<li><a href="#about">About Me</a></li>
					<li><a href="#experience">My Experience</a></li>
					<li><a href="#portfolio">My Portfolio</a></li>
					<li><a href="#contact">Contact Me</a></li>
				</ul>
			<div className="footer__socials">
				<a href="https://www.facebook.com/tokicirtkc/" rel="noreferrer" target="_BLANK"><FaFacebookSquare /></a>
			<a href="https://www.instagram.com/tokicirtkc_/" target="_BLANK" rel="noreferrer"><FaInstagramSquare /></a>
			<a href="https://github.com/caturilham05?tab=repositories" target="_BLANK" rel="noreferrer"><FaGithubSquare /></a>
			</div>
			<div className="footer__copyright">
				<small>&copy; cktkceess. All rights reserved</small>
			</div>
		</footer>
	)
}

export default Footer