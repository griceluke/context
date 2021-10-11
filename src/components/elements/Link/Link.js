// External imports, installed libraries, etc
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';

// Internal components, images, etc
import { AnchorStyles } from '../Anchor';
import { ButtonStyles } from '../Button';

const LinkComponent = styled(Link)`
	${props => props.styleas === 'button' && ButtonStyles};
	${props => props.styleas === 'link' && AnchorStyles};
`;

const Component = ({ children, className, styleas, to, title, onClick, fontFamily, marginbottom, color, variant }) => {
	return (
		<LinkComponent className={className} 
					   styleas={styleas}	
					   to={to} 
					   title={title} 
					   onClick={onClick} 
					   fontFamily={fontFamily}
					   marginbottom={marginbottom} 
					   color={color}
					   variant={variant}>
			{children}
		</LinkComponent>
	);
}

export default Component;

Component.defaultProps = {
	to: '#',
	fontFamily: 'sans',
	styleas: 'link',
	color: colors.primary[0],
};

Component.propTypes = {
	children: PropTypes.any,
	styleas: PropTypes.oneOf(['link', 'button']),
	to: PropTypes.string.isRequired,
	title: PropTypes.string,
	fontFamily: PropTypes.oneOf(['sans', 'serif']),
	marginbottom: PropTypes.number,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['secondary', 'primary']),
};
