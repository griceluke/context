// External imports, installed libraries, etc
import React, { useContext } from 'react';
// import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';
import useSplitTelephoneNumber from '../../hooks/useSplitTelephoneNumber';

// Internal components, images, etc
import Container from '../../components/Container';
import Paragraph from '../../components/elements/Paragraph';
import Anchor from '../../components/elements/Anchor';
import ToggleGender from '../../components/ToggleGender';
import Link from '../../components/elements/Link';
import Services from '../../components/Services';

function ServicesPage() {
	const { currentGenderData, otherGenderData } = useContext(GenderContext);

	const introText = currentGenderData.id === 1 ? 
						'It’s time to upgrade your fade' : 
						'Bring our your shine and bounce back';
	return (
		<>
			<Container>
				<Row>
					<Col xs={12}>
						<Paragraph variant={'serif'} textalign={'center'}>{introText}, choose one of our specialist {currentGenderData.jobType} services and book in with us by phone on <Anchor href={'tel:'+currentGenderData.phoneNumber} fontFamily={'sans'}>{useSplitTelephoneNumber(currentGenderData.phoneNumber)}</Anchor>.</Paragraph>

						{/* <Paragraph variant={'serif'}>Thriving with experience and youthfulness, some senior members of our team have been with us for over 25 years, others have been trained up with us and are the latest we’ve put through barbering education.</Paragraph>
						<Paragraph>It’s time to upgrade your fade, choose one of our specialist barbering services and book in with us online or by phone on 01484 721578.</Paragraph> */}
					</Col>
				</Row>
			</Container>
			<Container>
				<Services/>
			</Container>
			<Container>
				<Row>
					<Col xs={12}>
						<Link to={'/stylists'} styleas={'button'}>Our Stylists</Link>
						<ToggleGender>{otherGenderData.gender}'s Services</ToggleGender>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ServicesPage;