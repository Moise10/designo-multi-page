import React from 'react'
import CardItem from '../CardItem/CardItem'
import Express from '../../assets/web-design/desktop/image-express.jpg'
import Builder from '../../assets/web-design/desktop/image-builder.jpg'
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import Camp from '../../assets/web-design/desktop/image-camp.jpg'
import Photon from '../../assets/web-design/desktop/image-photon.jpg'
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg';
import './WebDesign.css'



function WebDesign() {

  const data = [
		{
			imgUrl: `${Express}`,
			tag: 'Express',
			text: 'A multi-carrier shipping website for ecommerce businesses',
		},
		{
			imgUrl: `${Transfer}`,
			tag: 'Transfer',
			text: 'Site for low-cost money transfers and sending money within seconds',
		},
		{
			imgUrl: `${Photon}`,
			tag: 'Photon',
			text: 'A state-of-the-art music player with high-resolution audio and DSP',
		},
		{
			imgUrl: `${Builder}`,
			tag: 'Builder',
			text: 'Connects users with local contractors based on their location',
		},
		{
			imgUrl: `${Blogr}`,
			tag: 'Blogr',
			text: 'Blogr is a platform for creating an online blog or publication',
		},
		{
			imgUrl: `${Camp}`,
			tag: 'Camp',
			text: 'Get expert training in coding, data, design, and digital marketing',
		},
	];


  return (
		<div className="web__container">
			<div className="main__title">
				<h1>Web design</h1>
				<p className="main text">
					Web design We build websites that serve as powerful marketing tools
					and bring memorable brand experiences.
				</p>
			</div>
			<div className="main__content">
				{data.map((item) => (
					<CardItem
						key={item.tag}
						text={item.text}
						tag={item.tag}
						imgUrl={item.imgUrl}
					/>
				))}
			</div>

			<div className="pages__tags">
				<div className="app__design">
					<h3 className="main__title">App Design</h3>
					<span>View Projects</span>
				</div>
				<div className="graphic__design">
					<h3 className="main__title">Graphic Design</h3>
					<span>View Projects</span>
				</div>
			</div>
		</div>
	);
}

export default WebDesign