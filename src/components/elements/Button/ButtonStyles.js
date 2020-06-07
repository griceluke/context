// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import fonts from '../../../styles/fonts';

// Internal components, images, etc


const ButtonStyles = styled.div`
	border: 3px solid ${colors.primary[0]};
	${props => props.variant === 'secondary' ? (`
		background: ${colors.white};
		color: ${colors.primary[0]};
	`) : (`
		background: ${colors.primary[0]};
		color: ${colors.white};
	`)}
	font-family: ${fonts.bespoke.fontFamily};
	font-weight: ${fonts.bespoke.fontWeight};
	margin-bottom: ${props => props.marginBottom && props.marginBottom+ 'rem'};
	padding: .9rem 1rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color .3s, border-color .3s, margin .3s;

	&:hover, &:focus {
		background: ${colors.primary.dark};
		border-color: ${colors.primary.dark};
		color: ${colors.white};
	}

	@media (min-width: ${breakpoints.mdUp}px) {
		display: inline-block;
		min-width: 275px;
	}
`;

const Component = ( {...props} ) => {
	return (
		<ButtonStyles {...props}>
			{props.children}
		</ButtonStyles>
	);
}

export default Component;

Component.defaultProps = {
	
};

Component.propTypes = {
	children: PropTypes.any,
};
