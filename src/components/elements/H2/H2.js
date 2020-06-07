// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';

// Internal components, images, etc
// NA ATM

const H2Style = styled.h2`
	color: ${props => props.color || colors.sectionTitle};
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 1.3rem;
	color: ${props => props.color};
`;

function H2({ className, children, color }) {
	return (
		<H2Style className={className} color={color}>
			{children}
		</H2Style>
	);
}

export default H2;
