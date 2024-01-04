import React, {useState, useEffect} from 'react'
import PortfolioDetail from './PortfolioDetail'
import { IoIosCloseCircle } from "react-icons/io";
import './portfolio.css'
import {datas} from '../../data/Data'
import LazyLoad from 'react-lazy-load';
import Modal from 'react-modal';
import { ImageGroup, Image } from 'react-fullscreen-image'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '95%',
    width: '95%'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Portfolio = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(0);

  function openModal(portfolioId) {
  	setModalId(portfolioId)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{
					datas.map((v, k) => {
						const url = window.location.href
						return (
							<div className="portfolio__template" key={k}>
						    <LazyLoad>
									<img src={v.image} alt={v.title}/>
								</LazyLoad>
								<div className="portfolio__title">
									<h3 style={{ textAlign: 'center', fontSize: '1rem'}}>{v.title}</h3>
								</div>
								<div className="portfolio__link">
						      <button onClick={() => openModal(k)} className="btn btn-primary btn-sm">Detail</button>
								</div>
							</div>
						)
					})
				}
			</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} style={{backgroundColor: '#fff', cursor: 'pointer'}} >
        	<h2>
						<IoIosCloseCircle />
        	</h2>
        </button>
        <PortfolioDetail getModalId={modalId}/>
      </Modal>
		</section>
	)
}

export default Portfolio