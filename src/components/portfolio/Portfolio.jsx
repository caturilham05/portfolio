import React from 'react'
import './portfolio.css'
import {datas} from '../../data/Data'

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{
					datas.map((v, k) => {
						const url = window.location.href
						console.log(v)
						return (
							<div className="portfolio__template" key={k}>
								<img src={v.image} alt={v.title} />
								<div className="portfolio__title">
									<h3 style={{ textAlign: 'center'}}>{v.title}</h3>
								</div>
								<div className="portfolio__link">
									<a href={v.url} className="btn btn-primary" target="_blank"><h5>Visit Website</h5></a>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio