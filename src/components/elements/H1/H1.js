// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM



const H1Style = styled.h1`
	font-size: 50px;
	font-weight: 900;
	margin-bottom: 1.3rem;

	color: ${props => props.color};
`;

function H1({ className, children, color }) {
	return (
		<H1Style className={className} color={color}>
			{children}
		</H1Style>
	);
}

export default H1;
