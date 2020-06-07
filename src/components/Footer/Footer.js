// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';
import navigationConfig from '../Navigation/config';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Internal components, images, etc
import SocialBar from '../SocialBar';
import Container from '../Container';
import ToggleGender from '../../components/ToggleGender';
import LogoIcon from '../assets/LogoIcon';
import Link from '../elements/Link';

const Footer = styled.footer`
	color: ${colors.grey[7]};
	font-size: .88rem;
	font-weight: ${fonts.sans.fontWeight.regular};
	margin-top: 2rem;
`;

const FooterMain = styled.div`
	background: ${colors.grey[1]};
	padding: 4rem 0;
`;

const Address = styled.span`
	display: block;
`;

const FooterTitle = styled.span`
	display: block;
	font-size: 1.05rem;
	font-weight: ${fonts.sans.fontWeight.semiBold};
	margin-bottom: .9em;
`;

const FooterList = styled.ul`
	@media (max-width: ${breakpoints.mdDown}px) {
		margin-bottom: 2rem;
	}

	li {
		margin-bottom: 1em;
	}
`;

const NavItem = styled(Link)`
	color: ${colors.grey[7]};
	font-weight: ${fonts.sans.fontWeight.regular};

	&:hover {
		color: ${colors.grey[9]};
	}
`;  


const Telephone = styled.a`
	color: ${colors.grey[7]};
	font-weight: ${fonts.sans.fontWeight.bold};
	text-decoration: none;

	&:hover {
		color: ${colors.grey[9]};
		text-decoration: underline;
	}
`;

const CopyrightCol = styled(Col)`
	text-align: center;
`;

const FooterLogo = styled(LogoIcon)`
	margin-bottom: .6rem;
`;

const Copyright = styled.span`
	display: block;
	margin-bottom: 1rem;
`;

const DesignedBy = styled.div`
	& span {
		color: ${colors.grey[5]};
	}

	& a {
		color: ${colors.grey[7]};
		font-weight: ${fonts.sans.fontWeight.bold};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Component = () => {	
	const { currentGenderData } = useContext(GenderContext);
	return (
		<Footer>
			<SocialBar/>
			<FooterMain>
				<Container>
					<Row>
						<Col xs={12} md={10} style={{margin: 'auto'}}>
							<Row>
								<Col xs={12} lg={3}>
									<FooterTitle>Taylors online</FooterTitle>
									<FooterList>
										{navigationConfig.pages.map((navItem, index) => {
											return (
												navItem.navigationItem && (
													<li key={`NAV_ITEM_`+index}>
														<NavItem to={navItem.path}>
															{navItem.pageName}
														</NavItem>
													</li>
												)
											);
										})}
										<li><ToggleGender/></li>
									</FooterList>
								</Col>
								<Col xs={12} lg={6}>
									<FooterTitle>Taylors &amp; Co.</FooterTitle>
									<FooterList>
										<li>
											<Address>
												{(currentGenderData && currentGenderData.address) && (
													currentGenderData.address.line1 +', '+ currentGenderData.address.town +', '+ currentGenderData.address.postCode
												)}
											</Address>
										</li>
										<li><Telephone href={'tel:01484715063'}>01484 715063</Telephone></li>
									</FooterList>
								</Col>
								<CopyrightCol xs={12} lg={3}>
									<FooterLogo width={20} height={20} backgroundColor={colors.primary[0]} foregroundColor={colors.grey[1]}/>
									<Copyright>Copyright {(new Date().getFullYear())}</Copyright>
									<DesignedBy>
										<span>Website by: </span>
										<a href="//www.halunadigital.com" target="_blank" rel="noopener noreferrer">Haluna Digital</a>
									</DesignedBy>
								</CopyrightCol>
							</Row>
						</Col>
					</Row>
				</Container>
			</FooterMain>
		</Footer>
	);
}

export default Component;
