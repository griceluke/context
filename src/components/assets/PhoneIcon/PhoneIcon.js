// External imports, installed libraries, etc
import React from 'react';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import colors from '../../../styles/colors';

// Internal components, images, etc
import SvgWrapper from '../../SvgWrapper';


const LogoIcon = ({ width, height, color, className }) => {
	return (
		<SvgWrapper>
			<svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 29">
				<g transform="translate(872 -4725)">
				<rect id="Rectangle_143" data-name="Rectangle 143" width="29" height="29" transform="translate(-872 4725)" fill="none"/>
				<path id="phone-solid" d="M20.6,1.017l-4.343-1A1.009,1.009,0,0,0,15.1.6l-2,4.677a1,1,0,0,0,.288,1.169l2.531,2.071a15.478,15.478,0,0,1-7.4,7.4L6.446,13.383a1,1,0,0,0-1.169-.288L.6,15.1a1.014,1.014,0,0,0-.585,1.153l1,4.343a1,1,0,0,0,.977.777A19.376,19.376,0,0,0,21.372,1.994,1,1,0,0,0,20.6,1.017Z" transform="matrix(-0.259, 0.966, -0.966, -0.259, -844.825, 4731.542)" fill={color}/>
				</g>
			</svg>
		</SvgWrapper>
	);
}

export default LogoIcon;

LogoIcon.defaultProps = {
	width: 16,
	height: 16,
	color: colors.primary[0],
};

LogoIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};
