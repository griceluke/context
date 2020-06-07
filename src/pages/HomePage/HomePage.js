// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc
import Container from '../../components/Container';
import _WelcomeBox from '../../components/WelcomeBox';
import _LogoIcon from '../../components/assets/LogoIcon';
import WelcomeBoxBlockQuote from '../../components/WelcomeBoxBlockQuote';
import Paragraph from '../../components/elements/Paragraph';
import ToggleGender from '../../components/ToggleGender';
import ClearGender from '../../components/ClearGender';
import OpeningTimes from '../../components/OpeningTimes';
import LinkButton from '../../components/elements/LinkButton';

const WelcomeBoxContainer = styled(Container)`
	@media (max-width: ${breakpoints.smDown}px) {
		padding: 0;
	}
`;

const WelcomeBox = styled(_WelcomeBox)`
	margin-bottom: 80px;
`;

const LogoIcon = styled(_LogoIcon)`
	margin-bottom: 1rem;
`;

const IntroductionaryTitle = styled.div`
	color: ${colors.grey[4]};
	font-size: 2.2rem;
	font-weight: bold;
	margin-bottom: 1rem;
	text-transform: uppercase;

	& h1 {
		color: ${colors.primary[0]};
	}

	& > * {
		display: inline;
	}
`;

const MainContentRow = styled(Row)`
	margin-bottom: 3rem;
`;

const ToggleGenderButton = styled(ToggleGender)`
	margin-bottom: 1rem;
`;

const HomePage = () => {
	const { currentGenderData, otherGenderData } = useContext(GenderContext);

	return (
		<>
			<WelcomeBoxContainer fluid>
				<Row>
					<Col xs={12}>
						<WelcomeBox>
							<LogoIcon foregroundColor={colors.primary[0]} backgroundColor={colors.white}/>
							<WelcomeBoxBlockQuote>Our {currentGenderData && (currentGenderData.jobType)} team’s philosophy - “to give the best advice and hairstyles for the clients image”</WelcomeBoxBlockQuote>
						</WelcomeBox>
					</Col>
				</Row>
			</WelcomeBoxContainer>
			<Container>
				<MainContentRow>
					<Col xs={12} md={6}>
						<IntroductionaryTitle>
							<h1>Taylors &amp; co</h1> - <h2>a studio founded in 1919 built upon the reputation of providing the highest standards in {currentGenderData && (currentGenderData.jobTypeCap)} and {otherGenderData && (otherGenderData.jobTypeCap)}</h2>
						</IntroductionaryTitle>
					</Col>
					<Col xs={12} md={6}>
						<Paragraph variant='serif'>Taylors hair studio was founded in 1919 by Edward Taylor. He built his reputation on providing a salon with the highest standards in all aspects of hairdressing, leading the way in bringing new techniques to the area. With his ideas and innovation the salon has become more successful throughout the years winning many national and international awards.</Paragraph>
						<Paragraph variant='serif'>Continuing in the family business Jason Michael, and his team of experienced and creative hairstylists, are here to continue his great grandfathers legacy in providing the latest techniques in hairdressing to suite your own personal style.</Paragraph>
						<Paragraph variant='serif'>The salon now hosts one of the best barbering teams in the area as well as our ever popular ladies upstairs where we have host specialists in action hairpieces.</Paragraph>
						<LinkButton to='/services' marginBottom={1}>Services</LinkButton>
						<LinkButton to='/stylists' variant={'secondary'}>Our stylists</LinkButton>
					</Col>
				</MainContentRow>
			</Container>
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<OpeningTimes/>
					</Col>
					<Col xs={12} md={6}>
						<ToggleGenderButton />
						<ClearGender variant='secondary'/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomePage;