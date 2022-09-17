import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<>
			<div className="header__socials">
				<a href="https://linkedin.com" target="_BLANK"><BsLinkedin /></a>
				<a href="https://github.com" target="_BLANK"><BsGithub /></a>
				<a href="https://instagram.com" target="_BLANK"><BsInstagram /></a>
				<a href="https://facebook.com" target="_BLANK"><BsFacebook /></a>
			</div>
		</>
	)
}

export default HeaderSocials