// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import navigationConfig from '../Navigation/config';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc
import Link from '../elements/Link';
import ToggleGender from '../../components/ToggleGender';
import Container from '../Container';


const Wrapper = styled.div`

	/* Mobile */
	@media (max-width: ${breakpoints.navigation.down}px) {
		background: ${colors.white};
		box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
		position: absolute;
		top: ${ props => (props.navIsOpen ? (navigationConfig.navTopbarHeightMobile) :  'calc(-100vh + ' + navigationConfig.navTopbarHeightMobile + ')')};
		transition: top .6s;
		width: 100vw;
		z-index: 998;
	}

	/* Above mobile */
	@media (min-width: ${breakpoints.navigation.up}px) {
	}

`;

const NavItems = styled.ul`
	padding: 1.5rem .5rem;

	li {
		display: block;
		padding: 1.3rem;
	}
	
	@media (min-width: ${breakpoints.navigation.up}px) {
		padding: 0 0 1.6rem;
		text-align: center;

		li {
			display: inline-block;
			padding: 0 2rem;
		}
	}

`;

const NavItem = styled(Link)`
	color: ${colors.primary[0]};
	font-weight: ${fonts.sans.fontWeight.semiBold};
	padding: .6rem 1rem;
`;  

const ConditionalWrap = ( {children, ...props} ) => {
	return (props.isMobile) ? (<>{children}</>) : <Container>{children}</Container>
}

const NavBar = ( {isMobile, navIsOpen, navItems} ) => {
	return (
		<ConditionalWrap isMobile={isMobile}>
			<Wrapper navIsOpen={navIsOpen} isMobile={isMobile}>
				<NavItems>
					{navItems.map((navItem, index) => {
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
					{isMobile && (
						<li><ToggleGender/></li>
					)}
				</NavItems>
			</Wrapper>
		</ConditionalWrap>
	);
}

export default NavBar;
