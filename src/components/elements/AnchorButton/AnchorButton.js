// External imports, installed libraries, etc
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import ButtonStyles from './ButtonStyles';

const A = styled.a`
	text-decoration: none;
`;

const AnchorButton = ( {children, className, onClick, title, href, target, variant, marginBottom} ) => {
	return (
		<A href={href} target={target} title={title} onClick={onClick}>
			<ButtonStyles className={className} variant={variant} marginBottom={marginBottom}>
				{children}
			</ButtonStyles>
		</A>
	);
}

export default AnchorButton;

AnchorButton.defaultProps = {
	href: '#',
	target: '_blank',
};

AnchorButton.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.any,
};


