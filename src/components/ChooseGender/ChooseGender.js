// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import Container from '../../components/Container';
// import Link from '../../components/elements/Link';

const WrapperLink = styled.div`
	display: block;

	& > * {
		pointer-events: none;
	}
`;

const TeamPhoto = styled.img`
	width: 100%;
`;

const Description = styled.div`
	background: #f7f7f7;
	margin-bottom: 40px;
	padding: 1.2rem 1.3rem;
	position: relative;
	text-align: center;

	::after {
		background: repeating-linear-gradient( -40deg, #f7f7f7, #f7f7f7 10px, transparent 10px, transparent 24px );
		bottom: -20px;
		content: '';
		display: block;
		height: 20px;
		left: 0;
		position: absolute;
		width: 100%;
	}
`;

const Subtitle = styled.span`
	display: block;
`;

const Title = styled.span`
	display: block;
`;

const ChooseGender = () => {
	const { genderData, setCurrentGender } = useContext(GenderContext);
	const path = window.location.pathname;

	const setGender = e => {
		let genderId = parseInt(e.target.getAttribute('data-id'));
		setCurrentGender(genderId);
	};

	return (
		<Container>
			<Row>
				{genderData.map(gender => {
					return (
						<Col sm={12} md={6} key={gender.id}>
							<WrapperLink 
								data-id={gender.id} 
								onClick={setGender}
								to={path}>
								<TeamPhoto src={gender.teamPhoto} />
								<Description>
									<Subtitle>{gender.jobTypeCap}</Subtitle>
									<Title>{gender.nameFullCap}</Title>
								</Description>
							</WrapperLink>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default ChooseGender;
