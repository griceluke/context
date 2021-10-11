// External imports, installed libraries, etc
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import fonts from '../../../styles/fonts';

// Internal components, images, etc
import { AnchorStyles } from '../Anchor';

export const ButtonStyles = css`
	border: 3px solid ${colors.primary[0]};
	background: ${props => props.variant === 'secondary' ? colors.white : colors.primary[0]};
	color: ${props => props.variant === 'secondary' ? colors.primary[0] : colors.white};
	display: inline-block;
	font-family: ${fonts.bespoke.fontFamily};
	font-weight: ${fonts.bespoke.fontWeight.regular};
	margin-bottom: ${props => props.marginbottom && props.marginbottom+`em`};
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
		min-width: 275px;
	}
`;

const ButtonTag = styled.button`
	${props => props.styleas === 'button' && ButtonStyles};
	${props => props.styleas === 'link' && AnchorStyles};
`;

const Component = ( { children, className, styleas, title, onClick, marginbottom, color, variant } ) => {
	return (
		<ButtonTag className={className}
				   styleas={styleas}
				   title={title} 
				   onClick={onClick} 
				   marginbottom={marginbottom}
				   color={color}
				   variant={variant}>
			{children}
		</ButtonTag>
	);
}

export default Component;

Component.defaultProps = {
	styleas: 'button',
	color: colors.primary[0],
};

Component.propTypes = {
	children: PropTypes.any,
	styleas: PropTypes.oneOf(['button', 'link']),
	title: PropTypes.string,
	marginbottom: PropTypes.number,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['secondary', 'primary']),
};
