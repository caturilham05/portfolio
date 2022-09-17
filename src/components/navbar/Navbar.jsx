import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { BsCardList } from 'react-icons/bs';
import './navbar.css'

const Navbar = () => {
	const [active, setActive] = useState('#')
	return (
		<nav>
			<a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><SiAboutdotme /></a>
			<a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
			<a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><BsCardList /></a>
			<a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
		</nav>
	)
}

export default Navbar