// External, react, library, etc imports
import React, { useState, createContext } from 'react';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM

export const DEFAULT_GENDER = null;

export const MALE_GENDER = 1;

export const FEMALE_GENDER = 2;

function getInitialGender(){
	if (sessionStorage.getItem('localStateCurrentGender')) {
		return parseInt(sessionStorage.getItem('localStateCurrentGender'));
	}
	return DEFAULT_GENDER;
}

export const GenderContext = createContext();

export const GenderProvider = ({ children }) => {
	const [currentGender, setCurrentGender] = useState(getInitialGender());

	return (
		<GenderContext.Provider value={{ currentGender, setCurrentGender }}>
			{children}
		</GenderContext.Provider>
	);
};
