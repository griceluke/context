


// External, react, library, etc imports
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Internal global, context, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Website, function/hooks, etc imports
// NA ATM


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
