// External imports, installed libraries, etc
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// Internal components, images, etc
import { ButtonStyles } from '../Button';

export const AnchorStyles = css`
	color: ${props => props.color ? props.color : colors.primary[0]};
	display: ${props => props.marginbottom > 0 && 'inline-block'};
	font-family: ${props => props.fontFamily && fonts[props.fontFamily].fontFamily};
	font-size: ${props => props.fontFamily && fonts[props.fontFamily].fontSize};
	font-weight: bold;
	margin-bottom: ${props => props.marginbottom && props.marginbottom+`em`};
	text-decoration: none;
	transition: background-color 0.3s, margin 0.3s;
	position: relative;

	&:hover {
		color: ${colors.primary.dark};
		text-decoration: underline;
	}

	&:focus {
		color: ${colors.primary.dark};
		text-decoration: underline;
	}
`

const AnchorTag = styled.a`
	${props => props.styleas === 'link' && AnchorStyles};
	${props => props.styleas === 'button' && ButtonStyles};
`;

const Component = ({ children, className, styleas, href, rel, target, title, onClick, fontFamily, marginbottom, color, variant }) => {

	return (
		<AnchorTag className={className}
				   styleas={styleas}	    
				   href={href} 
				   target={target} 
				   rel={target === '_blank' && rel}
				   title={title} 
				   onClick={onClick} 
				   fontFamily={fontFamily}
				   marginbottom={marginbottom} 
				   color={color}
				   variant={variant}>
			{children}
		</AnchorTag>
	);
}

export default Component;

Component.defaultProps = {
	href: '#',
	target: '_blank',
	rel: 'noopener noreferrer',
	fontFamily: 'sans',
	styleas: 'link',
};

Component.propTypes = {
	children: PropTypes.any,
	styleas: PropTypes.oneOf(['link', 'button']),
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
	title: PropTypes.string,
	fontFamily: PropTypes.oneOf(['sans', 'serif']),
	marginbottom: PropTypes.number,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['secondary', 'primary']),
};
