import React from 'react';
import Logo from '../../assets/shared/desktop/logo-light.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';


import './Footer.css'

function Footer() {
	return (
		<div className="footer__container">
			<div className="footer">
				<div className="footer__logo">
					<img src={Logo} alt="" />
					<nav className="navigation">
						<ul className="nav__lists">
							<li className="nav__list">
								<a href="#">Our company</a>
							</li>
							<li className="nav__list">
								<a href="#">locations</a>
							</li>
							<li className="nav__list">
								<a href="#">contacts</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="footer__tags">
					<div className="tags">
						<div className="tags__top">
							<p>Designo Central Office</p>
							<p>3886 Wellington Street</p>
							<p>Toronto, Ontario M9C 3J5</p>
						</div>
						<div className="">
							<p>Contact Us (Central Office)</p>
							<p>P : +1 253-863-8967</p>
							<p>M : contact@designo.co</p>
						</div>
					</div>

					<div className="logo__icon">
						<FacebookIcon className="icon" />
						<YouTubeIcon className="icon" />
						<TwitterIcon className="icon" />
						<PinterestIcon className="icon" />
						<InstagramIcon className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
