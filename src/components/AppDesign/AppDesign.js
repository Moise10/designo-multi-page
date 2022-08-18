import React from 'react'
import CardItem from '../CardItem/CardItem'
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import LoopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg'
import Todo from '../../assets/app-design/desktop/image-todo.jpg'
import PatternSvg from '../../assets/app-design/desktop/bg-pattern-intro-app.svg' 
import './AppDesign.css'

import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import WebDesignImg from '../../assets/home/desktop/image-web-design-large.jpg';
import styled from 'styled-components'



function AppDesign() {

  const data = [
		{
			imgUrl: `${Airfilter}`,
			tag: 'Airfilter',
			text: 'Solving the problem of poor indoor air quality by filtering the air',
		},
		{
			imgUrl: `${Eyecam}`,
			tag: 'Eyecam',
			text: 'Product that lets you edit your favorite photos and videos at any time',
		},
		{
			imgUrl: `${Faceit}`,
			tag: 'Faceit',
			text: 'Get to meet your favorite internet superstar with the faceit app',
		},
		{
			imgUrl: `${LoopStudios}`,
			tag: 'Loopstudios',
			text: 'A VR experience app made for Loopstudios',
		},
		{
			imgUrl: `${Todo}`,
			tag: 'Todo',
			text: 'A todo app that features cloud sync with light and dark mode',
		},
	];
	

  return (
		<div className="container">
			<Hero background={PatternSvg}>
				<h1>App design</h1>
				<p className="main text">
					Our mobile designs bring intuitive digital solutions to your customers
					right at their fingertips.
				</p>
			</Hero>
			<MainContent className="main__content">
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
				<div>
					<img src={WebDesignImg} alt="" />
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
		</div>
	);
}

const MainContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	gap: 2rem;
	margin-bottom: 6rem;
`;


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


const PageTags = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 3rem;
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


export default AppDesign