// External imports, installed libraries, etc
import React from 'react';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import ButtonStyles from './ButtonStyles';

const Component = ( {children, className, onClick, title, variant, marginBottom} ) => {
	return (
		<button onClick={onClick} title={title}>
			<ButtonStyles className={className} variant={variant} marginBottom={marginBottom}>
				{children}
			</ButtonStyles>
		</button>
	);
}

export default Component;

Component.defaultProps = {
	
};

Component.propTypes = {
	children: PropTypes.any,
};
