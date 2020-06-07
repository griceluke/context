// External imports, installed libraries, etc
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// Internal components, images, etc
// NA ATM


const Paragraph = styled.p`
	color: ${(props) => (fonts[props.variant].color)};
	color: ${props => props.color || colors.color};
	font-family: ${(props) => (fonts[props.variant].fontFamily)};
	font-weight: ${(props) => (fonts[props.variant].fontWeight.regular)};
	font-size: ${(props) => (fonts[props.variant].fontSize)};
	line-height: ${(props) => (fonts[props.variant].lineHeight)};
	margin-bottom: 1.25em;
`;

const Component = ({ className, children, color, variant }) => {
	return (
		<Paragraph color={color} className={className} variant={variant}>
			{children}
		</Paragraph>
	);
}

export default Component;

Component.defaultProps = {
	variant: 'sans',
};

Component.propTypes = {
	variant: PropTypes.string,
};
