// External, react, library, etc imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal global, context, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Website, function/hooks, etc imports
// NA ATM

const ToggleButton = styled.button`
    padding: .6rem 1rem;
	background: lightgray;
    border: 2px solid black;
    position: relative;
    top: 2px;

	&:first-of-type {
		border-right: none;
	}

	&.active {
		background: #fff;
		border-bottom: 2px solid white;
	}
`;

const sortToggleButtonOrder = (currentGender, genderData) => {
	const toBeFirst = currentGender;
	return genderData.sort(function(x,y){ return x.id === toBeFirst ? -1 : y === toBeFirst ? 1 : 0; });
}

const ToggleGender = ({genderData, genderDataForCalendar, setGenderForCalendar}) => {
	const { currentGender } = useContext(GenderContext);

	const toggleGenderForCalendar = (e) => {
		let genderId = parseInt(e.target.getAttribute('data-id'));
		setGenderForCalendar(genderId);
	};

	sortToggleButtonOrder(currentGender, genderData);
	
	return (
		<>
		{genderDataForCalendar && (
			genderData.map(gender => {
				return (
					<ToggleButton 
						key={gender.id} 
						data-id={gender.id} 
						onClick={toggleGenderForCalendar}
						className={genderDataForCalendar.id === gender.id ? 'active': null}>
						{gender.nameCap}
					</ToggleButton>
				);
			})
		)}
		</>
	);
};

export default ToggleGender;
