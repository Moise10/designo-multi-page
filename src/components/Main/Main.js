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


function Main() {
  return (
		<div className="main__container">
			<div className="hero__container">
				<h1>Award-winning custom designs and digital branding solutions</h1>
				<p>
					With over 10 years in the industry, we are experienced in creating
					fully responsive websites, app design, and engaging brand experiences.
					Find out more about our services.
				</p>
				<button className="hero__btn">Learn more</button>
				{/* <img src={HeroPhone} alt="" /> */}
			</div>

			<div className="pages__tags">
				<div className="web__design">
					<h3 className="main__title">Web Design</h3>
					<span>View Projects</span>
				</div>
				<div className="app__design">
					<h3 className="main__title">App Design</h3>
					<span>View Projects</span>
				</div>
				<div className="graphic__design">
					<h3 className="main__title">Graphic Design</h3>
					<span>View Projects</span>
				</div>
			</div>

			<div className="description">
				<div className="passion">
					<Avatar src={Passionate} className="img" />
					<div className="description__passion">
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
					<div className="description__resource">
						<h2>Resourceful</h2>
						<p>
							Everything that we do has a strategic purpose. We use an agile
							approach in all of our projects and value customer collaboration.
							It guarantees superior results that fulfill our clients’ needs.
						</p>
					</div>
				</div>
				<div className="friendly">
					<Avatar src={Friendly} className="img" />
					<div className="description__friendly">
						<h2>Friendly</h2>
						<p>
							We are a group of enthusiastic folks who know how to put people
							first. Our success depends on our customers, and we strive to give
							them the best experience a company can provide.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main