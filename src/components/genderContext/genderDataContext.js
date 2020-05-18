// External, react, library, etc imports
import React, { useState, useEffect, createContext, useContext } from 'react';

// Internal global, context, etc
import { GenderContext } from '../../components/genderContext/genderContext.js';

// Website, function/hooks, etc imports
import _genderData from './genderData';

export const GenderDataContext = createContext();

export const GenderDataProvider = ({ children }) => {
	const { currentGender } = useContext(GenderContext);
	const [genderData] = useState(_genderData);
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
			value={{ currentGenderData, otherGenderData, genderData }}
		>
			{children}
		</GenderDataContext.Provider>
	);
};
