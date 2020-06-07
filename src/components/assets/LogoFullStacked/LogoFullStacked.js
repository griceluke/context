// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import LogoIcon from '../LogoIcon';

const Wrapper = styled.div`
	text-align: center;
`;

const LogoText = styled.span`
	color: ${ props => props.textColor || props.textColor};
	display: block;
`;

const LogoFullStacked = ({ width, height, backgroundColor, foregroundColor, textColor, className  }) => {
	return (
		<Wrapper>
			<LogoIcon width={width} height={height} backgroundColor={backgroundColor} foregroundColor={foregroundColor} className={className} />
			<LogoText textColor={textColor}>Taylors &amp; Co.</LogoText>
		</Wrapper>
	);
}

export default LogoFullStacked;

LogoIcon.defaultProps = {
	width: 45,
	height: 45,
	backgroundColor: '#666',
	foregroundColor: '#fff',
	textColor: '#666',
};

LogoIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	backgroundColor: PropTypes.string,
	foregroundColor: PropTypes.string,
	textColor: PropTypes.string,
};

