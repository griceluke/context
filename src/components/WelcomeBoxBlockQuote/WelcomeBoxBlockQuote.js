// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';

// Internal components, images, etc
import _BlockQuote from '../../components/BlockQuote';

const BlockQuote = styled(_BlockQuote)`
	font-family: "Cormorant Garamond", 'Times New Roman', Times, serif;
	font-weight: bold;
	line-height: 1.4em;
	text-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
`;

const WelcomeBoxBlockQuote = ({ children, className, color }) => {
	return (
		<BlockQuote className={className} color={color}>
			{children}
		</BlockQuote>
	);
}

export default WelcomeBoxBlockQuote;

WelcomeBoxBlockQuote.defaultProps = {
	color: colors.white,
};


WelcomeBoxBlockQuote.propTypes = {
	color: PropTypes.string,
};
