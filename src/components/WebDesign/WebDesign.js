import React from 'react'
import CardItem from '../CardItem/CardItem'
import Express from '../../assets/web-design/desktop/image-express.jpg'
import Builder from '../../assets/web-design/desktop/image-builder.jpg'
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import Camp from '../../assets/web-design/desktop/image-camp.jpg'
import Photon from '../../assets/web-design/desktop/image-photon.jpg'
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg'
import './WebDesign.css'
import IntroWeb from '../../assets/web-design/desktop/bg-pattern-intro-web.svg'
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import WebDesignImg from '../../assets/home/desktop/image-web-design-large.jpg';
import styled from 'styled-components'


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
		<Container>
			<Hero background={IntroWeb}>
				<h1>Web design</h1>
				<p className="main text">
					Web design We build websites that serve as powerful marketing tools
					and bring memorable brand experiences.
				</p>
			</Hero>
			<MainContent>
				{data.map((item) => (
					<CardItem
						key={item.tag}
						text={item.text}
						tag={item.tag}
						imgUrl={item.imgUrl}
					/>
				))}
			</MainContent>

			<PageTags>
				<div >
					<img src={AppDesign} alt="" />
					<div className="">
						<h3 className="main__title">App Design</h3>
						<span>View Projects</span>
					</div>
				</div>

				<div>
					<img src={GraphicDesign} alt="" />
					<div className="">
						<h3 className="main__title">Graphic Design</h3>
						<span>View Projects</span>
					</div>
				</div>
			</PageTags>
		</Container>
	);
}

const Container = styled.div`
  
`

const Hero = styled.div`
	text-align: center;
	background-image: url(${({ background }) => background});
	background-position: bottom 4rem right;
	/* background-size: cover; */
	background-repeat: no-repeat;
	margin-bottom: 5rem;
	background-color: #e7816b;
	color: #fff;
	padding: 6rem 10%;

	@media (min-width: 689px) {
		background-size: cover;
		background-position: right;
		border-radius: 20px;
		padding: 2rem 1rem;

		p {
			padding: 2rem 30%;
		}
	}
	@media (min-width: 1111px) {
		padding: 2rem 1rem;
	}
`;

const MainContent = styled.div`
    display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem , 1fr));
		gap: 2rem;
		margin-bottom: 6rem;
`

const PageTags = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 2rem;
	margin-bottom: 3rem;

	div {
		position: relative;
		text-align: center;
		color: white;
		border-radius: 15px;
		overflow: hidden;
		img {
			width: 100%;
			object-fit: cover;
		}
		div {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;

			h3 {
				font-size: 1.8rem;
				letter-spacing: 0.5rem;
				width: 100%;
				margin-bottom: 1rem;
			}

			span {
				letter-spacing: 0.6rem;
				font-size: 1rem;
			}
		}
	}
`;


export default WebDesign