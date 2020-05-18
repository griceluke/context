// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal global, context, etc
import colors from '../../../styles/colors';

// Website, function/hooks, etc imports
// NA ATM


const A = styled.a`
	color: ${colors.primary};
	font-weight: bold;
	text-decoration: none;
	transition: background-color 0.3s, margin 0.3s;
	position: relative;

	&:hover {
		color: ${colors.secondary};
		text-decoration: underline;
	}

	&:focus {
		color: ${colors.secondary};
		outline: dashed 4px ${colors.primary};
		text-decoration: underline;
	}
`;

function Component({ className, href, title, target, children }) {
	return (
		<A className={className} href={href} target={target} title={title}>
			{children}
		</A>
	);
}

export default Component;

Component.defaultProps = {
	href: '#',
};

Component.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.any,
	className: PropTypes.string,
};
