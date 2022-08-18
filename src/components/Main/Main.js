import { Avatar } from '@mui/material'
import React from 'react'
import HeroBg from '../../assets/home/desktop/bg-pattern-hero-home.svg'
import AppDesign from '../../assets/home/desktop/image-app-design.jpg'
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg'
import WebDesign from '../../assets/home/desktop/image-web-design-large.jpg'
import Passionate from '../../assets/home/desktop/illustration-passionate.svg'
import Friendly from '../../assets/home/desktop/illustration-friendly.svg'
import Resourceful from '../../assets/home/desktop/illustration-resourceful.svg'
import './Main.css'
import HeroPhone from '../../assets/home/desktop/image-hero-phone.png'
import styled from 'styled-components'




function Main() {
  return (
		<Container>
			<HeroContainer background={HeroBg}>
				<div>
					<h1>Award-winning custom designs and digital branding solutions</h1>
					<p>
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
					<button className="hero__btn">Learn more</button>
				</div>
				<div className="">
					<img src={HeroPhone} alt="" className="" />
				</div>
			</HeroContainer>

			<PageTags>
				<div >
					<img src={WebDesign} alt="" />
					<div className="">
						<h3 className="main__title">Web Design</h3>
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

				<div>
					<img src={GraphicDesign} alt="" />
					<div className="">
						<h3 className="main__title">Graphic Design</h3>
						<span>View Projects</span>
					</div>
				</div>
			</PageTags>

			<Description>
				<div>
					<Avatar src={Passionate} className="img" />
					<div>
						<h2>Passionate</h2>
						<p>
							Each project starts with an in-depth brand research to ensure we
							only create products that serve a purpose. We merge art, design,
							and technology into exciting new solutions.
						</p>
					</div>
				</div>
				<div className="resource">
					<Avatar src={Resourceful} className="img" />
					<div>
						<h2>Resourceful</h2>
						<p>
							Everything that we do has a strategic purpose. We use an agile
							approach in all of our projects and value customer collaboration.
							It guarantees superior results that fulfill our clients’ needs.
						</p>
					</div>
				</div>
				<div>
					<Avatar src={Friendly} className="img" />
					<div>
						<h2>Friendly</h2>
						<p>
							We are a group of enthusiastic folks who know how to put people
							first. Our success depends on our customers, and we strive to give
							them the best experience a company can provide.
						</p>
					</div>
				</div>
			</Description>
		</Container>
	);
}

const Container = styled.div`
  /* padding: 0 1.4rem; */
`;

const HeroContainer = styled.div`
	background-image: url(${({ background }) => background});
	background-color: #e7816b;
	background-repeat: no-repeat;
	background-size: center;
	background-position: bottom -7rem left;
	overflow: hidden;
	color: whitesmoke;
	width: 100%;
	height: 100%;
	padding-top: 6rem;
	padding: 2rem;
	margin-bottom: 4rem;

	div {
		display: flex;
		align-items: center;
		flex-direction: column;

		h1 {
			text-align: center;
			margin-bottom: 1.4rem;
			padding-top: 3rem;
		}
		p {
			text-align: center;
			margin-bottom: 1.2rem;
		}
		button {
			padding: 10px 20px;
			background-color: white;
			border: none;
			border-radius: 5px;
		}
	}

	img {
		width: 100%;
		overflow: hidden;
		margin-bottom: -14rem;
	}

	@media screen and (min-width: 689px) {
		background-position: top 6rem right -6rem;

		div {

			
			h1 {
				padding: 2rem 8rem;
			}

			p {
				padding: 0 8rem;
			}
			button {
				background-color: white;
				border: none;
				border-radius: 5px;
			}
		}

		img {
			width: 100%;
			overflow: hidden;
			margin-bottom: -24rem;
		}
	}

	@media (min-width: 700px) {
		flex-direction: row;

		img {
			width: 100%;
			margin-bottom: 0;
		}
	}
`;



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

const Description = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.img {
			height: 8rem;
			width: 8rem;
		}

		div {
			text-align: center;
		}
	}

	@media screen and (min-width: 500px) {
		div {
			flex-direction: row;

			div {
				flex-direction: column;
				text-align: left;
				align-items: flex-start;
				justify-content: flex-start;
			}
		}
	}

	@media (min-width: 700px) {
		flex-direction: row;
		gap: 1.4rem;

		div {
			flex-direction: column;
			gap: 1.4rem;

			div {
				justify-content: center;
				align-items: center;
				text-align: center;
				gap: 1.4rem;
			}
		}
	}
`;

export default Main