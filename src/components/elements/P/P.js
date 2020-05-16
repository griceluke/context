import React from 'react';
import styled from 'styled-components';

import colors from '../../../styles/colors';

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
