// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

// Internal components, images, etc
import PhoneIcon from '../assets/PhoneIcon';

const Link = styled.a`
	color: ${colors.primary[0]};
	font-size: .85em;
	font-weight: ${fonts.sans.fontWeight.regular};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&.secondary {
		background: ${colors.white};
		background: rgba(255, 255, 255, 0.9);
		color: ${colors.primary};
	}

	@media (min-width: 42em) {
		/* Breakpoint smaller than SM */
	}
`;

const Span = styled.span`
	padding-left: .5rem;
`;

const NavTelephone = ({ children, isMobile, href, title, className }) => {
	const iconSize = isMobile ? 30 : 20;
	return (
		<Link className={className} href={href} title={title}>
			<PhoneIcon height={iconSize} width={iconSize}/>
			{!isMobile && (
				<Span>{children}</Span>
			)}	
		</Link>
	);
}

export default NavTelephone;

NavTelephone.defaultProps = {
	href: '#',
	children: 'Call us',
};

NavTelephone.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	href: PropTypes.string.isRequired,
	title: PropTypes.string,
	children: PropTypes.string,
};
