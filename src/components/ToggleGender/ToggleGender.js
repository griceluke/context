// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import Button from '../elements/Button';

const ToggleButton = styled(Button)`

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

const ToggleGender = ({children, className, variant}) => {
	const { otherGenderData, currentGender, setCurrentGender } = useContext(GenderContext);

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
		<ToggleButton onClick={toggleGender} className={className} variant={variant}>
			{children ? 
				(children) : 
				(otherGenderData.nameCap + "'s website")
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
