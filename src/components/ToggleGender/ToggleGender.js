// External, react, library, etc imports
import React, { useContext } from 'react';

// Internal global, context, etc
import { GenderContext } from '../genderContext/genderContext.js';
import { GenderDataContext } from '../genderContext/genderDataContext.js';

// Website, function/hooks, etc imports
// NA ATM

const ToggleGender = () => {
	const { otherGenderData } = useContext(GenderDataContext);
	const { currentGender, setCurrentGender } = useContext(GenderContext);

	const toggleGender = () => {
		if (currentGender === 1) {
			setCurrentGender(2);
			sessionStorage.setItem('localStateCurrentGender', 2);
		} else {
			setCurrentGender(1);
			sessionStorage.setItem('localStateCurrentGender', 1);
		}
	};

	return (
		<button onClick={toggleGender}>Show {otherGenderData.name} website</button>
	);
};

export default ToggleGender;
