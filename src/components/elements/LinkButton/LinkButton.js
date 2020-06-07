// External imports, installed libraries, etc
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as _Link } from "react-router-dom";

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import ButtonStyles from '../Button/ButtonStyles';

const Link = styled(_Link)`
	text-decoration: none;
`;


const LinkButton = ( {children, className, onClick, title, to, variant, marginBottom} ) => {
	return (
		<Link to={to} title={title} onClick={onClick}>
			<ButtonStyles className={className} variant={variant} marginBottom={marginBottom}>
				{children}
			</ButtonStyles>
		</Link>
	);
}

export default LinkButton;

LinkButton.defaultProps = {
	to: '#',
};

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	title: PropTypes.string,
	children: PropTypes.any,
};


