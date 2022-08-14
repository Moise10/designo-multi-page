import React from 'react'
import CardItem from '../CardItem/CardItem'
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import Change from '../../assets/graphic-design/desktop/image-change.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg'


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
			<div className="main__title">
				<h1>Graphic design</h1>
				<p className="main text">
					We deliver eye-catching branding materials that are tailored to meet
					your business objectives.
				</p>
			</div>
			<div className="main__content">
				{data.map((item) => (
					<CardItem key={item.tag} text={item.text} tag={item.tag} />
				))}
			</div>

			<div className="tags">
				<div className="tag">
					<h1 className="tag__title">App Design</h1>
					<p>View Projects</p>
				</div>
				<div className="tag">
					<h1 className="tag__title">Web Design</h1>
					<p>View Projects</p>
				</div>
			</div>
		</div>
	);
}

export default GraphicDesign