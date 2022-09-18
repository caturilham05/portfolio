import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import { useParallax } from 'react-scroll-parallax';

const HeaderSocials = () => {
	const LinkedInComp = () => {
		const { ref } = useParallax({
	    translateX: [-49900, 0],
	    scale: [0.55, 1],
	    rotate: [-180, 0],
	    easing: 'easeOutQuint'
		});
		return (
			<a href="https://www.linkedin.com/in/catur-ilham-9305b4163/" target="_BLANK" rel="noreferrer" ref={ref}><BsLinkedin /></a>
		)
	}

	const GithubComp = () => {
		const { ref } = useParallax({
	    translateX: [-49900, 0],
	    scale: [0.45, 1],
	    rotate: [-180, 0],
	    easing: 'easeOutQuint'
		});
		return (
			<a href="https://github.com/caturilham05?tab=repositories" target="_BLANK" rel="noreferrer" ref={ref}><BsGithub /></a>
		)
	}

	const InstagramComp = () => {
		const { ref } = useParallax({
	    translateX: [-49900, 0],
	    scale: [0.35, 1],
	    rotate: [-180, 0],
	    easing: 'easeOutQuint'
		});
		return (
			<a href="https://www.instagram.com/tokicirtkc_/" target="_BLANK" rel="noreferrer" ref={ref}><BsInstagram /></a>
		)
	}

	const FacebookComp = () => {
		const { ref } = useParallax({
	    translateX: [-49900, 0],
	    scale: [0.25, 1],
	    rotate: [-180, 0],
	    easing: 'easeOutQuint'
		});
		return (
			<a href="https://www.facebook.com/tokicirtkc/" target="_BLANK" rel="noreferrer" ref={ref}><BsFacebook /></a>
		)
	}

	return (
		<div className="header__socials">
			<LinkedInComp />
			<GithubComp />
			<InstagramComp />
			<FacebookComp />
		</div>
	)
}

export default HeaderSocials