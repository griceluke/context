// External, react, library, etc imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal global, context, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Website, function/hooks, etc imports
// NA ATM

const Gender = styled.div`
	width: 100%;
	min-height: 50vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(https://source.unsplash.com/random/1000x760);
    background-size: cover;
	cursor: pointer;
	position: relative;

	& span {
		background: white;
		padding: 10px;
	}
`;

const Wrapper = styled.div`

	height: 100%;
`;

const ChooseGender = () => {
	const { genderData, setCurrentGender } = useContext(GenderContext);

	const setGender = e => {
		let genderId = parseInt(e.target.getAttribute('data-id'));
		setCurrentGender(genderId);
		sessionStorage.setItem('localStateCurrentGender', genderId);
	};
	console.log(genderData[0].id);

	return (
		<>
			{/* <Gender key={genderData[0].id} 
					data-id={genderData[0].id} 
					onClick={setGender}
					role='button'>
				<Wrapper data-id={genderData[0].id} onClick={setGender}>
					<span onClick={setGender}
						data-id={genderData[0].id}>
						{genderData[0].gender}
					</span>
				</Wrapper>
			</Gender> */}
			{genderData.map(gender => {
				return (
					<Gender key={gender.id} 
							data-id={gender.id} 
							onClick={setGender}>
						<span>{gender.nameCap}</span>
					</Gender>
				);
			})}
		</>
	);
};

export default ChooseGender;
