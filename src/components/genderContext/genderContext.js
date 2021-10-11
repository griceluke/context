// External imports, installed libraries, etc
import React, { useState, useEffect, createContext } from 'react';
import QueryString from 'query-string';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import _genderData, { DEFAULT_DETAILS } from './genderData';

export const GenderContext = createContext();

const getGender = () => {
	const queryStrings = QueryString.parse(window.location.search);
	if ( queryStrings.gender ) {
		return parseInt(queryStrings.gender);
	} 
	else if ( sessionStorage.getItem('localStateCurrentGender') ) {
		return parseInt(sessionStorage.getItem('localStateCurrentGender'));
	}

	return DEFAULT_DETAILS.id;
}

const setSessionStorageGender = e => {
	sessionStorage.setItem('localStateCurrentGender', e);
}

export const GenderDataProvider = ({ children }) => {
	const [genderData] = useState(_genderData);
	const [currentGender, setCurrentGender] = useState(getGender());
	const [currentGenderData, setCurrentGenderData] = useState(DEFAULT_DETAILS);
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
			return DEFAULT_DETAILS;
		});
		setCurrentGender(function() {
			for (let i = 0; i < genderData.length; i++) {
				if (genderData[i].id === currentGender) {
					return genderData[i].id;
				}
			}
			return DEFAULT_DETAILS.id;
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


