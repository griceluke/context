// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';
import navigationConfig from '../Navigation/config';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Internal components, images, etc
import Logo from '../assets/LogoIcon';
import _NavTelephone from '../NavTelephone';
import NavToggle from '../NavToggle';
import Link from '../elements/Link';

const TopBar = styled.div`
	align-items: center;
	background: ${colors.white};
	display: flex;
	justify-content: space-between;
	height: ${props => props.isMobile ? navigationConfig.navTopbarHeightMobile : navigationConfig.navTopbarHeight};
	margin-bottom: ${props => props.isMobile && '1rem '};
	padding: 0 ${navigationConfig.navTopbarPadding.unit}${navigationConfig.navTopbarPadding.unitType};
	position: relative;
	z-index: 999;

	${props => props.isMobile && ( 
		props.navBottomHrStyle
	)}
	
`;

const NavTelephone = styled(_NavTelephone)`
	margin-right: 20px;
`;

const Address = styled(Link)`
	font-size: .85em;
	font-weight: ${fonts.sans.fontWeight.regular};
`;

const Left = styled.div`

`;

const Right = styled.div`
	
`;



const NavTopbar = ( {isMobile, navBottomHrStyle, navIsOpen, toggleNav} ) => {
	const { currentGenderData } = useContext(GenderContext);

	return (
		isMobile ? (
			<TopBar isMobile={isMobile} navBottomHrStyle={navBottomHrStyle}>
				<Left>
					<Link to='/' title='Home page'>
						<Logo/>
					</Link>
				</Left>
				<Right>
					<NavTelephone isMobile={isMobile} title={'Call us on 01484 715063'} href={'tel:01484715063'}/>
					<NavToggle isMobile={isMobile} navIsOpen={navIsOpen} toggleNav={toggleNav}/>
				</Right>
			</TopBar>
		) : (
			<TopBar>
				<Left>
					<NavTelephone isMobile={isMobile} href={'tel:01484715063'}>Call us: 01484 715063</NavTelephone>
				</Left>
				<Right>
					<Address to='/contact'>
						{currentGenderData.address && (
							currentGenderData.address.line1 +', '+ currentGenderData.address.town +', '+ currentGenderData.address.postCode
						)}
					</Address>
				</Right>
			</TopBar>
		)
	);
}

export default NavTopbar;
