import React, {useState} from 'react'
import Logo from '../../assets/shared/desktop/logo-light.png'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [cliked, setIsClicked] = useState(false);

	return (
		<div className="header__nav">
			<a href="#" className="log">
			</a>

			<div className="">
				<ul className={cliked ? 'header__lists active' : 'header__lists'}>
					<li className="header__list">
						<a href="#" className="link active">
							Shop
						</a>
					</li>
					<li className="header__list">
						<a href="#" className="link">
							Blog
						</a>
					</li>
					<li className="header__list">
						<a href="#" className="link">
							About
						</a>
					</li>
					<li className="header__list">
						<a href="#" className="link">
							Contact
						</a>
					</li>
				</ul>
			</div>

			<div className="mobile" onClick={() => setIsClicked((prev) => !prev)}>
				{cliked ? <MenuIcon /> : <CloseIcon />}
			</div>
		</div>
	);
}

export default Header;