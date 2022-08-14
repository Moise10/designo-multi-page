import React from 'react'
import CardItem from '../CardItem/CardItem'
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import LoopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg'
import Todo from '../../assets/app-design/desktop/image-todo.jpg'



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
			<div className="main__title">
				<h1>App design</h1>
				<p className="main text">
					Our mobile designs bring intuitive digital solutions to your customers
					right at their fingertips.
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

export default AppDesign