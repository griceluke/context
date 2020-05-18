// Eximport React from 'react';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Iternal, react, library, etc imports
import colors from '../../styles/colors';

// Website, function/hooks, etc imports
// NA ATM


const A = styled.a`
	background: ${colors.primary};
	border: 1px solid #cb255c;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	display: block;
	font-weight: bold;
	padding: 1rem;
	text-align: center;
	text-decoration: none;
	transition: background-color 0.3s, margin 0.3s;

	&:hover {
		background: ${colors.secondary};
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
	}

	&:focus {
		background: ${colors.secondary};
		outline: dashed 4px ${colors.primary};
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
	}

	&.secondary {
		background: ${colors.white};
		background: rgba(255, 255, 255, 0.9);
		color: ${colors.primary};
	}

	@media (min-width: 42em) {
		/* Breakpoint smaller than SM */
		display: inline-block;
		min-width: 275px;
	}
`;

function HyperlinkButton({
	href,
	title,
	target,
	children,
	variant,
	className,
}) {
	return (
		<A className={className} href={href} title={title} target={target}>
			{children}
		</A>
	);
}

export default HyperlinkButton;

HyperlinkButton.defaultProps = {
	href: '#',
};

HyperlinkButton.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.any,
};
