// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';

// Internal components, images, etc
import Container from '../../components/Container';
import OpeningTimes from '../../components/OpeningTimes';
import Paragraph from '../../components/elements/Paragraph';
import Link from '../../components/elements/Link';
// import GoogleMap from '../../components/GoogleMap';

const Address = styled.span`
	display: block;
`;

const ContactPage = () => {
	const { currentGenderData } = useContext(GenderContext);

	return (
		<>
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<OpeningTimes/>
					</Col>
					<Col xs={12} md={6}>
						{/* <GoogleMap/> */}
						<Paragraph marginbottom={0}>
							<Address>
								{(currentGenderData && currentGenderData.address) && (
									currentGenderData.address.line1 +', '+ currentGenderData.address.town +', '+ currentGenderData.address.postCode)}
							</Address>
						</Paragraph>
						<Paragraph>Call us: <Link href={'tel:01484715063'}>01484 715063</Link></Paragraph>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ContactPage;