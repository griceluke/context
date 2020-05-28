// External, react, library, etc imports
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal global, context, etc
import { GenderDataContext } from '../genderContext/genderDataContext.js';

// Website, function/hooks, etc imports
// NA ATM

const ToggleButton = styled.button`

	&[data-element-type='a'] {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		text-decoration: underline;
	}
	
`;

const ToggleGender = ({children, elementType}) => {
	const { otherGenderData, currentGender, setCurrentGender } = useContext(GenderDataContext);

	const toggleGender = () => {
		if (currentGender === 1) {
			setCurrentGender(2);
			sessionStorage.setItem('localStateCurrentGender', 2);
		} else {
			setCurrentGender(1);
			sessionStorage.setItem('localStateCurrentGender', 1);
		}
	};

	return (
		<ToggleButton onClick={toggleGender} data-element-type={elementType}>
			{children ? 
				(children) : 
				('Show ' + otherGenderData.name + ' website')
			}
		</ToggleButton>
	);
};

export default ToggleGender;


ToggleGender.defaultProps = {
	elementType: 'button',
	title: 'Toggle gender view',
};

ToggleGender.propTypes = {
	elementType: PropTypes.string,
	children: PropTypes.any,
	title: PropTypes.string,
};
