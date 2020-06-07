


// External imports, installed libraries, etc
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import Button from '../elements/Button';


function ClearGender({ children, className, title, variant }) {
	const { setCurrentGender } = useContext(GenderContext);

	const clear = () => {
		setCurrentGender();
		sessionStorage.removeItem('localStateCurrentGender');
	};

	return (
		<Button onClick={clear} className={className} title={title} variant={variant}>
			{children}
		</Button>
	);
}

export default ClearGender;

ClearGender.defaultProps = {
	children: 'Clear gender choice',
	title: 'Clear gender',
};

ClearGender.propTypes = {
	title: PropTypes.string,
};
