import React from 'react'
import Me from '../../assets/me-original.jpg'
import './about.css'

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about">
		    <div className="about__me">
		    	<div className="about__me__img">
		    		<img src={Me} alt="me"/>
		    	</div>
		    </div>
		    <div className="about__content">
		    	<div className="about__cards">
		    		<article className="about__card">
		    			<h5>Experience</h5>
		    			<small>2+ Years Working</small>
		    		</article>
		    		<article className="about__card">
		    			<h5>Experience</h5>
		    			<small>2+ Years Working</small>
		    		</article>
		    		<article className="about__card">
		    			<h5>Experience</h5>
		    			<small>2+ Years Working</small>
		    		</article>
		    	</div>
		    	<p>
				    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.		    		
		    	</p>
		    	<a href="#contact" className="btn btn-primary"> Let's Talk</a>
		    </div>
			</div>
		</section>
	)
}

export default About