// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc
import _Container from '../Container';

const AdjustedContainer = styled(_Container)`
	@media (max-width: ${breakpoints.mdDown}px) {
		padding: 0 0;

		& > .row {
			margin-left: 0;
			margin-right: 0;
			
			& > [class*="col-"] {
				padding-left: 0;
				padding-right: 0;
			}
		}
		
	}
`;

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

const ContainWidth = styled.div`
	margin: 0 auto;
	max-width: 500px;
`;

const Component = ({ children, className }) => {
	return (
		<AdjustedContainer fluid>
			<Row>
				<Col xs={12}>
					<WelcomeBox className={className}>
						<ContainWidth>
							{children}
						</ContainWidth>
					</WelcomeBox>
				</Col>
			</Row>
		</AdjustedContainer>
	);
}

export default Component;

