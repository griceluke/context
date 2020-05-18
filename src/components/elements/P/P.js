// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
import colors from '../../../styles/colors';

// Website, function/hooks, etc imports
// NA ATM


const PStyle = styled.p`
	font-weight: 400;
	line-height: 1.9rem;
	margin-bottom: 1.25em;
	color: ${props => props.color || colors.font};
`;

function P({ className, children, color }) {
	return (
		<PStyle color={color} className={className}>
			{children}
		</PStyle>
	);
}

export default P;
