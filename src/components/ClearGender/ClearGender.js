import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GenderContext } from '../genderContext/genderContext.js';

function ClearGender({ children, title }) {
	const { setCurrentGender } = useContext(GenderContext);

	const clear = () => {
		setCurrentGender();
		sessionStorage.removeItem('localStateCurrentGender');
	};

	return (
		<button onClick={clear} title={title}>
			{children}
		</button>
	);
}

export default ClearGender;

ClearGender.defaultProps = {
	title: 'Clear gender',
};

ClearGender.propTypes = {
	title: PropTypes.string,
};
