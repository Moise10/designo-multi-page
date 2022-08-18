import React from 'react'
import CardItem from '../CardItem/CardItem'
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import Change from '../../assets/graphic-design/desktop/image-change.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg'
import PatternIntro from '../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import styled from 'styled-components'
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';

import WebDesignImg from '../../assets/home/desktop/image-web-design-large.jpg';


function GraphicDesign() {
    const data = [
			{
				imgUrl: `${BoxedWater}`,
				tag: 'Tim Brown',
				text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
			},
			{
				imgUrl: `${Change}`,
				tag: 'Boxed water',
				text: 'A simple packaging concept made for Boxed Water',
			},
			{
				imgUrl: `${Science}`,
				tag: 'Science!',
				text: 'A poster made in collaboration with the Federal Art Project',
			},
		];

  return (
		<div className="container">
			<Hero background={PatternIntro}>
				<h1>Graphic design</h1>
				<p className="main text">
					We deliver eye-catching branding materials that are tailored to meet
					your business objectives.
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
				<div>
					<img src={AppDesign} alt="" />
					<div className="">
						<h3 className="main__title">App Design</h3>
						<span>View Projects</span>
					</div>
				</div>

				<div>
					<img src={WebDesignImg} alt="" />
					<div className="">
						<h3 className="main__title">Graphic Design</h3>
						<span>View Projects</span>
					</div>
				</div>
			</PageTags>
		</div>
	);
}

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
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	gap: 2rem;
	margin-bottom: 6rem;
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

export default GraphicDesign