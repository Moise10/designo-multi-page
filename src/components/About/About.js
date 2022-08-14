import React from 'react'
import { Avatar } from '@mui/material'
import Passionate from '../../assets/home/desktop/illustration-passionate.svg';
import Friendly from '../../assets/home/desktop/illustration-friendly.svg';
import Resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import AboutHero from '../../assets/about/desktop/image-about-hero.jpg'

function About() {
  return (
		<div className="about-container">
			<div className="">
				<h1 className="about__title">About us</h1>
				<p className="text">
					Founded in 2010, we are a creative agency that produces lasting
					results for our clients. We’ve partnered with many startups,
					corporations, and nonprofits alike to craft designs that make real
					impact. We’re always looking forward to creating brands, products, and
					digital experiences that connect with our clients' audiences.
				</p>
			</div>
			<div className="about__talent">
				<div className=""></div>
				<div className="talent__description">
					<h2 className="talent__title">World-class talent</h2>
					<p className="text">
						We are a crew of strategists, problem-solvers, and technologists.
						Every design is thoughtfully crafted from concept to launch,
						ensuring success in its given market. We are constantly updating our
						skills in a myriad of platforms.
					</p>
					<p className="text">
						Our team is multi-disciplinary and we are not merely interested in
						form — content and meaning are just as important. We give great
						importance to craftsmanship, service, and prompt delivery. Clients
						have always been impressed with our high-quality outcomes that
						encapsulates their brand’s story and mission.
					</p>
				</div>
			</div>

			<div className="description">
				<div className="">
					<Avatar src={Passionate} />
					<h2>Passionate</h2>
					<p>
						Each project starts with an in-depth brand research to ensure we
						only create products that serve a purpose. We merge art, design, and
						technology into exciting new solutions.
					</p>
				</div>
				<div className="">
					<Avatar src={Resourceful} />
					<h2>Resourceful</h2>
					<p>
						Everything that we do has a strategic purpose. We use an agile
						approach in all of our projects and value customer collaboration. It
						guarantees superior results that fulfill our clients’ needs.
					</p>
				</div>
				<div className="">
					<Avatar src={Friendly} />
					<h2>Friendly</h2>
					<p>
						We are a group of enthusiastic folks who know how to put people
						first. Our success depends on our customers, and we strive to give
						them the best experience a company can provide.
					</p>
				</div>
			</div>

			<div className="real__deal">
				<div className="">
        </div>
				<div className="">
					<h2 className="deal__title">The real deal</h2>
					<p className="text">
						As strategic partners in our clients’ businesses, we are ready to
						take on any challenge as our own. Solving real problems require
						empathy and collaboration, and we strive to bring a fresh
						perspective to every opportunity. We make design and technology more
						accessible and give you tools to measure success.
					</p>
					<p className="text">
						We are visual storytellers in appealing and captivating ways. By
						combining business and marketing strategies, we inspire audiences to
						take action and drive real results.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About