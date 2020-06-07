// External imports, installed libraries, etc
import React, { useState, useEffect, createContext } from 'react';
import QueryString from 'query-string';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import _genderData, { DEFAULT_GENDER } from './genderData';

export const GenderContext = createContext();

const getInitialGender = () => {
	const queryStrings = QueryString.parse(window.location.search);
	if ( queryStrings.gender ) {
		return parseInt(queryStrings.gender);
	}

	else if ( sessionStorage.getItem('localStateCurrentGender') ) {
		return parseInt(sessionStorage.getItem('localStateCurrentGender'));
	}

	return DEFAULT_GENDER;
}

const setSessionStorageGender = e => {
	sessionStorage.setItem('localStateCurrentGender', e);
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
					setSessionStorageGender(genderData[i].id);
					return genderData[i];
				}
			}
		});
	}, [genderData, currentGender]);

	return (
		<GenderContext.Provider
			value={{ currentGender, setCurrentGender, currentGenderData, otherGenderData, genderData }}
		>
			{children}
		</GenderContext.Provider>
	);
};


