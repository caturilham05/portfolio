import React from 'react'
import HeaderSocials from './HeaderSocials.jsx'
import './header.css'
import LazyLoad from 'react-lazy-load';

const Header = () => {
	return (
		<>
			<header>
				<div className="bg">
					<div className="container header__container">
						<h5>Hello I'm</h5>
						<h1>Catur Ilham Juniarto</h1>
						<h5 className="text-light">Website Developer</h5>
						<HeaderSocials />
						<div className="profile">
					    <LazyLoad>
								<img src={process.env.PUBLIC_URL + '/assets/me.png'} alt="profile" className="profile__img"/>
					    </LazyLoad>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header