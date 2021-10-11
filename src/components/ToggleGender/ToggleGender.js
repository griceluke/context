// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import { AnchorStyles } from '../elements/Anchor';
import { ButtonStyles } from '../elements/Button';

const StyledSpan = styled.span`
	${props => props.styleas === 'button' && ButtonStyles};
	${props => props.styleas === 'link' && AnchorStyles};
`;

const ToggleGender = ({children, className, styleas, marginbottom, variant}) => {
	const { otherGenderData, currentGender, setCurrentGender } = useContext(GenderContext);

	const toggleGender = () => {
		if (currentGender === 1) {
			setCurrentGender(2);
			sessionStorage.setItem('localStateCurrentGender', 2);
		} else {
			setCurrentGender(1);
			sessionStorage.setItem('localStateCurrentGender', 1);
		}
		window.scrollTo(0,0);
	};

	return (
		<StyledSpan className={className} 
					styleas={styleas}
					marginbottom={marginbottom} 
					variant={variant}
					onClick={toggleGender}
					tabIndex={0}>
			{children ? 
				(children) : 
				(otherGenderData.nameCap + " website")
			}
		</StyledSpan>
	);
};

export default ToggleGender;


ToggleGender.defaultProps = {
	styleas: 'button',
	title: 'Toggle gender view',
};

ToggleGender.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
};
