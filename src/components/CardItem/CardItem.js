import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

function CardItem({ imgUrl, tag, text }) {

	const styles ={
		backgroundImage: `url(${imgUrl})`
	}

	// {/* <div styles={{backgroundImage: `url(${imgUrl}`}}

	// 		></div>
	// 		<img src={imgUrl} alt="" />
	// 		
	// 		 */}

	return (
		<div className="card__item" style={{ marginBottom: '0.4rem' }}>
			<Card style={{ borderRadius: '10px', marginBottom: '2rem'}}>
				<CardMedia
					component="img"
					height="250"
					image={imgUrl}
					alt="Paella dish"
					style={{
						objectFit: 'cover',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<CardContent style={{ backgroundColor: '#E7816B' }}>
					<Typography style={{ textAlign: 'center', color: '#333136' }}>
						<h2 className="tag__title">{tag}</h2>
						<p className="text">{text}</p>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default CardItem