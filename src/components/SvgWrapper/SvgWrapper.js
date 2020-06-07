// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc

const Wrapper = styled.span`
	> svg {
		display: inline-block;
		vertical-align: middle;
	}
`;

const SvgWrapper = ({ children }) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	);
}

export default SvgWrapper;

SvgWrapper.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

