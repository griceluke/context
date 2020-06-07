// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Internal components, images, etc


const ToggleButton = styled.button`
    padding: 1.3rem 1.4rem;
    position: relative;
	top: 2px;
	
	color: ${fonts.sans.color};
	font-family: ${fonts.sans.fontFamily};
	font-weight: ${fonts.sans.fontWeight.regular};
	font-size: ${fonts.sans.fontSize};
	line-height: ${fonts.sans.lineHeight};

	&:first-of-type {
		border-right: none;
	}

	&.active {
		background: #fff;
		border: 2px solid ${colors.grey[2]};
		border-bottom: 2px solid ${colors.white};
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
		e.target.blur();
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
