// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';

// Internal components, images, etc

const NavToggleIcon = styled.div`
	display: inline-block;
	cursor: pointer;
	transform: rotate(180deg);
	vertical-align: middle;

	&:focus {
		outline: 5px auto -webkit-focus-ring-color;
	}

	& > div {
		background-color: ${colors.primary[0]};
		height: 5px;
		margin: 6px 0;
		transition: 0.4s;

		&:first-child {
			width: 35px;
			${ props => props.navIsOpen && (
				`transform: rotate(-45deg) translate(-3.5px, 3.5px);`
			)}
			
		}

		&:last-child {
			width: 20px;
			${ props => props.navIsOpen && (
				`width: 35px;
				transform: rotate(45deg) translate(-4.5px,-3.75px);`
			)}
			
		}
	}

	
	
`;

const NavToggle = ({isMobile, navIsOpen, toggleNav}) => {
	return (
		<NavToggleIcon navIsOpen={navIsOpen} 
					   onClick={toggleNav}
					   title={navIsOpen ? ('close menu') : ('open menu')} 
					   role='button'>
			<div></div>
			<div></div>
		</NavToggleIcon>
	);
}

export default NavToggle;
