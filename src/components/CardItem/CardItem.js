import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import './CardItem.css'
import styled from 'styled-components'

function CardItem({ imgUrl, tag, text }) {

	return (
		<>
			<CardContainer class="card">
				<img
					class="card-img"
					src={imgUrl}
					alt="an iphone on a macbook with dramatic lighting"
				/>
				<div class="card-content">
					<h2 class="card-title">{tag}</h2>
					<p class="card-body">{text}</p>
				</div>
			</CardContainer>
		</>
	);
}

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffad9b;
	border-radius: 10px;
	overflow: hidden;

	img {
		width: 100%;
		object-fit: cover;
	}

	div {
		text-align: center;
		padding: 15px;
		background-color: #ffad9b;

		&:hover {
			background-color: #e7816b;
		}
	}
`;

export default CardItem