// External imports, installed libraries, etc
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';

// Internal components, images, etc
// NA ATM


const A = styled(Link)`
	color: ${colors.primary[0]};
	display: inline-block;
	font-weight: bold;
	text-decoration: none;
	transition: background-color 0.3s, margin 0.3s;
	position: relative;

	&:hover {
		color: ${colors.primary.dark};
		text-decoration: underline;
	}

	&:focus {
		color: ${colors.primary.dark};
		text-decoration: underline;
	}
`;

const Component = ({ className, to, title, target, children, onClick }) => {
	return (
		<A className={className} to={to} target={target} title={title} onClick={onClick}>
			{children}
		</A>
	);
}

export default Component;

Component.defaultProps = {
	to: '#',
};

Component.propTypes = {
	to: PropTypes.string.isRequired,
	title: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.any,
	className: PropTypes.string,
};
