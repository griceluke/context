// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';

// Internal components, images, etc

const Wrapper = styled.blockquote`
	color: ${props => props.color};
`;

const BlockQuoteItalic = ({ children, className, color }) => {
	return (
		<Wrapper className={className} color={color}>
			{children}
		</Wrapper>
	);
}

export default BlockQuoteItalic;

BlockQuoteItalic.defaultProps = {
	color: colors.grey[8],
};


BlockQuoteItalic.propTypes = {
	color: PropTypes.string,
};
