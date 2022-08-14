import React from 'react'
import { Avatar } from '@mui/material';
import Passionate from '../../assets/home/desktop/illustration-passionate.svg';
import Friendly from '../../assets/home/desktop/illustration-friendly.svg';
import Resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import AboutHero from '../../assets/about/desktop/image-about-hero.jpg';


function Contact() {
  return (
		<div className="contact__container">
			<div className="main__contact">
				<div className="contact__text">
					<h1>Contact us</h1>
					<p>
						Ready to take it to the next level? Let’s talk about your project or
						idea and find out how we can help your business grow. If you are
						looking for unique digital experiences that’s relatable to your
						users, drop us a line.
					</p>
				</div>
				<div className="contact__form">
					<form action="">
						<input type="text" placeholder="name" />
						<input type="email" placeholder="Email Address" />
						<input type="tel" placeholder="Phone" />
						<textarea name="" id="" cols="30" rows="10"></textarea>
						<button type="submit" name="">
							Submit
						</button>
					</form>
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
		</div>
	);
}

export default Contact