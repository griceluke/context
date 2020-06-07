// External imports, installed libraries, etc
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import navigationConfig from '../Navigation/config';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import useWindowSize from '../../hooks/useWindowSize';

// Internal components, images, etc
import NavTopBar from '../NavTopbar';
import LogoFullStacked from '../assets/LogoFullStacked';
import _NavBar from '../NavBar';

const navBottomHrStyle = `
	&::after {
		bottom: 0;
		border-bottom: solid 2px ${colors.grey[2]};
		content: ' ';
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		width: calc(100% - ${navigationConfig.navTopbarPadding.unit * 2}${navigationConfig.navTopbarPadding.unitType});
		z-index: 1;
	}
`;

const Nav = styled.nav`
	${props => !props.isMobile && (`
		margin-bottom: 1.6rem;
		position: relative;` +
		navBottomHrStyle
	)}
`;

const LogoBar = styled.div`
	margin-bottom: 2rem;
`;

const LinkToHome = styled(Link)`
	display: inline-block;
    left: 50%;
    transform: translateX(-50%);
	position: relative;
`;

const NavBar = styled(_NavBar)`
	height: ${navigationConfig => navigationConfig.navTopbarHeight};
`;

const Navigation = () => {
	const { width: currentWidth } = useWindowSize();

	const [width, setWidth] = useState(currentWidth);
	const [navIsOpen, setNavIsOpen] = useState(false);

	const isMobile = width < breakpoints.navigation.up;

	const toggleNav = (e) => {
		navIsOpen ? (
			setNavIsOpen(false)
		) : (
			setNavIsOpen(true)
		)
	};

	useEffect(() => {
		if (currentWidth !== width) {
			setWidth(currentWidth);
		}
	}, [currentWidth, width]);
	
	useEffect(() => {
		!isMobile && (
			setNavIsOpen(false)
		)
	}, [isMobile]);
	
	return (
		<Nav isMobile={isMobile}>
			<NavTopBar isMobile={isMobile} navBottomHrStyle={navBottomHrStyle}navIsOpen={navIsOpen} toggleNav={toggleNav} />
			{!isMobile && (
				<LogoBar>
					<LinkToHome to='/' title='Home page'>
						<LogoFullStacked/>
					</LinkToHome>
				</LogoBar>
			)}
			<NavBar isMobile={isMobile} navIsOpen={navIsOpen} navItems={navigationConfig.pages} />
		</Nav>
	);
}

export default Navigation;
