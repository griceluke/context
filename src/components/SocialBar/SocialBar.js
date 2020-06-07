// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Internal components, images, etc
import Container from '../Container';
import LogoIcon from '../assets/LogoIcon';

const SocialBar = styled.div`
	background: ${colors.primary[0]};
	margin-top: 40px;
	padding: 1rem 0;
	position: relative;

	@media (min-width: ${breakpoints.mdUp}px) {
		&::after {
			background: repeating-linear-gradient( -40deg, ${colors.primary[0]}, ${colors.primary[0]} 10px, transparent 10px, transparent 24px );
			content: '';
			display: block;
			height: 20px;
			left: 0;
			position: absolute;
			top: -20px;
			width: 100%;
		}
	}
`;

const Right = styled.div`
    align-items: center;
    display: flex;
	float: right;
    height: 100%;
`;

const SocialTitle = styled.span`
	color: ${colors.white};
	font-family: ${fonts.bespoke.fontFamily};
	font-size: 1.25rem;
	font-weight: ${fonts.bespoke.fontWeight.regular};
`;

const Component = () => {	
	const { currentGenderData } = useContext(GenderContext);

	return (
		<SocialBar>
			<Container>
				<Row>
					<Col xs={12}>
						<LogoIcon backgroundColor={colors.white} foregroundColor={colors.primary[0]}/>
						{(currentGenderData.socials && currentGenderData.socials.length > 0) && (
						<Right>
							<SocialTitle>Follow us</SocialTitle>
							{currentGenderData.socials.map((social, index) => {
								return (
									<a key={`SOCIAL_ITEM_`+index} href={social.link} title={social.platform + ' account - ' + social.account}>
										{social.logo}
									</a>
								);
							})}
						</Right>
						)}
					</Col>
				</Row>
			</Container>
		</SocialBar>
	);
}

export default Component;
