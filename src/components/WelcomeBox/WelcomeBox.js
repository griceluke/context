// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc

const WelcomeBox = styled.div`
	background: ${colors.primary[0]};
	color: ${colors.white};
	margin-bottom: 40px;
	padding: 2.6rem 1rem;
	position: relative;
	text-align: center;

	@media (min-width: ${breakpoints.mdUp}px) {
		&::after {
			background: repeating-linear-gradient( -40deg, ${colors.primary[0]}, ${colors.primary[0]} 10px, transparent 10px, transparent 24px );
			bottom: -20px;
			content: '';
			display: block;
			height: 20px;
			left: 0;
			position: absolute;
			width: 100%;
		}
	}
`;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 500px;
`;

const Component = ({ children, className }) => {
	return (
		<WelcomeBox className={className}>
			<Wrapper>
				{children}
			</Wrapper>
		</WelcomeBox>
	);
}

export default Component;

