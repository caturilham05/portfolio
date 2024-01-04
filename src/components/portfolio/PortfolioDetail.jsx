import React from 'react'
import './portfolio.css'
import {datas} from '../../data/Data'
import LazyLoad from 'react-lazy-load';
import { ImageGroup, Image } from 'react-fullscreen-image'


function PortfolioDetail({getModalId}) {
  console.log(datas[getModalId])
  return (
  	<div style={{color: '#000'}}>
      <center>
    		<h1 style={{marginBottom: '1rem'}}>{datas[getModalId].title}</h1>
      </center>
      <div style={{margin: '1rem'}}>
        <article>{datas[getModalId].description}</article>
      </div>
      <center>
        <div style={{marginTop: '2rem', fontSize: '20px', textTransform: 'uppercase', fontWeight: '500'}}>Images</div>
      </center>
      <div className="image__group">
        <ImageGroup>
          <ul className="images">
            {datas[getModalId].images?.map((i, k) => (
              <li key={k}>
                <Image
                  src={i.image}
                  alt="nature"
                />
              </li>
            ))}
          </ul>
        </ImageGroup>
      </div>
      <div className="portfolio__link">
        <a href={datas[getModalId].url} className="btn btn-primary" target="_blank"><h5>Visit Website</h5></a>
      </div>
  	</div>
  );
}

export default PortfolioDetail