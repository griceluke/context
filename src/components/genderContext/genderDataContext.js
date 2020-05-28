// External, react, library, etc imports
import React, { useState, useEffect, createContext } from 'react';

// Internal global, context, etc

// Website, function/hooks, etc imports
import _genderData, { DEFAULT_GENDER } from './genderData';

export const GenderDataContext = createContext();

function getInitialGender(){
	if (sessionStorage.getItem('localStateCurrentGender')) {
		return parseInt(sessionStorage.getItem('localStateCurrentGender'));
	}
	return DEFAULT_GENDER;
}

export const GenderDataProvider = ({ children }) => {
	const [genderData] = useState(_genderData);
	
	const [currentGender, setCurrentGender] = useState(getInitialGender());
	const [currentGenderData, setCurrentGenderData] = useState({});
	const [otherGenderData, setOtherGenderData] = useState({});

	useEffect(() => {
		
		setOtherGenderData(function() {
			for (let i = 0; i < genderData.length; i++) {
				if (genderData[i].id !== currentGender) {
					return genderData[i];
				}
			}
		});
		setCurrentGenderData(function() {
			for (let i = 0; i < genderData.length; i++) {
				if (genderData[i].id === currentGender) {
					return genderData[i];
				}
			}
		});
	}, [genderData, currentGender]);

	return (
		<GenderDataContext.Provider
			value={{ currentGender, setCurrentGender, currentGenderData, otherGenderData, genderData }}
		>
			{children}
		</GenderDataContext.Provider>
	);
};


