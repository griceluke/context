import React from 'react';
import PropTypes from 'prop-types';

const LogoIcon = ({ width, height, backgroundColor, foregroundColor, className }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 62.191 57.187">
			<path data-name="background" d="M0,0H62.191V57.187H0Z" fill={backgroundColor}/>
			<path data-name="T" d="M.33-30.19H15.381v2.571h-5.6q-.176,3.23-.22,6.46t-.044,6.042q0,1.692.022,3.56T9.6-7.745q.044,1.945.11,3.911T9.888,0H5.779q.132-1.868.209-3.834t.121-3.911q.044-1.945.066-3.812t.022-3.56q0-2.812-.055-6.042t-.209-6.46H.33Z" transform="translate(23.16 42.43)" fill={foregroundColor}/>
		</svg>
	);
}

export default LogoIcon;

LogoIcon.defaultProps = {
	width: 45,
	height: 45,
	backgroundColor: '#666',
	foregroundColor: '#fff',
};

LogoIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	backgroundColor: PropTypes.string,
	foregroundColor: PropTypes.string,
};
