import React, {useState} from 'react'
import './experience.css'

const Experience = () => {
	const Progress = ({done}) => {
		const [style, setStyle] = useState({})
		
		setTimeout(() => {
			const newStyle = {
				opacity: 1,
				width: `${done}%`
			}
			setStyle(newStyle)
		}, 200)

		return (
			<div className="progress">
				<div className="progress__done" style={style}>
					{done}%
				</div>
			</div>
		)
	}

	return (
		<section id="experience">
			<h5>What Skill I Have</h5>
			<h2>My Experience</h2>
			<div className="container experience">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<h5>HTML</h5>
						<Progress done="70" /> 
						<h5>CSS</h5>
						<Progress done="50" /> 
						<h5>Javascript</h5>
						<Progress done="45" /> 
						<h5>Bootstrap</h5>
						<Progress done="80" /> 
						<h5>React Js</h5>
						<Progress done="20" /> 
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<h5>PHP</h5>
						<Progress done="70" /> 
						<h5>Laravel</h5>
						<Progress done="50" /> 
						<h5>Codeigniter 3</h5>
						<Progress done="45" /> 
						<h5>Rest API</h5>
						<Progress done="80" /> 
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience