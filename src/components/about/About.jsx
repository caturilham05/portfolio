import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import AboutImg from '../../assets/about.jpg'
import './about.css'
import LazyLoad from 'react-lazy-load';

const About = () => {
	const ProgrammerComp = () => {
		const { ref } = useParallax({
	    translateX: [-100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
			<article className="about__card" ref={ref}>
				<h5>Programmer</h5>
				<small>2+ Years<br />Working</small>
			</article>
		)
	}

	const ProjectComp = () => {
		const { ref } = useParallax({
	    translateY: [-100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
  		<article className="about__card" ref={ref}>
  			<h5>Projects</h5>
  			<small>10+ Completed</small>
  		</article>
		)
	}

	const ExperienceComp = () => {
		const { ref } = useParallax({
	    translateY: [100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
			<article className="about__card" ref={ref}>
				<h5>Experience</h5>
				<small>2+ Years Working</small>
			</article>
		)
	}

	return (
		<section id="about">
				<h5>Get To Know</h5>
				<h2>About Me</h2>
				<div className="container about">
			    <div className="about__me">
			    	<div className="about__me__img">
					    <LazyLoad>
			    			<img src={AboutImg} alt="me" />
					    </LazyLoad>
			    	</div>
			    </div>
			    <div className="about__content">
			    	<div className="about__cards">
			    		<ProgrammerComp />
			    		<ProjectComp />
			    		<ExperienceComp />
			    	</div>
			    	<p>
					    My name is <b>Catur Ilham Juniarto</b>, usually called Catur. Born in June 6, 1998 in Kudus
							Regency. I am a graduate of the Information Systems, Dian Nuswantoro University,
							Semarang. I am a person who is honest, neat, thorough, can work individually or in a
							team. Doing something to the fullest is a form of my responsibility.
							Able to problem solving something that thinks logically such as the flow of business processes for developing an application.
							In the world of programming, I prefer the Backend Developer which
							manages the logic of an application.
			    	</p>
			    	<a href="#contact" className="btn btn-primary"> Let's Talk</a>
			    </div>
				</div>
		</section>
	)
}

export default About